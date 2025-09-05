'use client';
import { addToCart } from '@/api/services/cart.api';
import { createTransaction } from '@/api/services/transaction.api';
import { discountHeaderColumns } from '@/app/(defaults)/patient-registration/components/discountHeaderColumns';
import { PaymentType } from '@/app/(defaults)/patient-registration/components/options';
import { alert } from '@/app/(defaults)/patient-registration/components/Swal';
import CustomDataTable from '@/components/datatables/custom-datatables';
import IconCircleCheck from '@/components/icon/icon-circle-check';
import IconDollarSignCircle from '@/components/icon/icon-dollar-sign-circle';
import IconSearch from '@/components/icon/icon-search';
import IconTrash from '@/components/icon/icon-trash';
import IconX from '@/components/icon/icon-x';
import CustomModal from '@/components/reusable/CustomModal';
import { confirmAlert, swalWithBootstrapButtons } from '@/components/reusable/CustomSweetAlert';
import useGetCart from '@/hooks/cart/useGetCart';
import useRemoveCart from '@/hooks/cart/useRemoveCart';
import useApplyDiscount from '@/hooks/discount/useApplyDiscount';
import useGetDiscount from '@/hooks/discount/useGetDiscount';
import useGetLaboratoryPackage from '@/hooks/mastefile/package/useGetLaboratoryPackage';
import useGetLaboratoryTest from '@/hooks/mastefile/test/useGetLabTest';
import { toast } from '@/hooks/user/useSignIn';
import { BaseResponseType } from '@/types/BaseResponse';
import { GetDiscountDto } from '@/types/DTO/Discount..dto';
import { CreateTransactionDTO } from '@/types/DTO/Transaction.dto';
import { ScrollArea } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Select from 'react-select';

const initialFormData = {
    clientId: 0,
    amountPaid: '',
    paymentType: '',
    change: 0,
    paymentReference: '',
    totalAmount: 0,
    remarks: '',
};

export default function TestSelection() {
    const router = useRouter();
    const [openDiscountModal, setOpenDiscountModel] = useState<boolean>(false);
    const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const [filterType, setFilterType] = useState<'all' | 'labTest' | 'laboratoryPackage'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();
    const { labtest } = useGetLaboratoryTest();
    const { laboratoryPackage } = useGetLaboratoryPackage();
    const { submitDiscount } = useApplyDiscount();
    const { discountData } = useGetDiscount();
    const data: GetDiscountDto[] = discountData ?? [];
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState<CreateTransactionDTO>(initialFormData);

    const raw = searchParams.get('clientId');
    let currentId: any = null;
    if (raw) {
        try {
            const decoded = decodeURIComponent(raw);
            currentId = JSON.parse(decoded);
        } catch (error) {
            console.error('Error parsing row data:', error);
        }
    }
    const { cartdata, totalAmount, refetchData } = useGetCart(currentId);
    const { removeCart } = useRemoveCart(currentId);
    const combinedServices = useMemo(
        () => [
            ...labtest.map((test) => ({
                type: 'labTest',
                id: test.id,
                name: test.testName,
                description: test.testCategory,
                price: test.price,
            })),
            ...laboratoryPackage.map((pkg) => ({
                type: 'laboratoryPackage',
                id: pkg.id,
                name: pkg.packageName,
                description: pkg.packages?.map((p) => p.itemName).join(', ') ?? 'N/A',
                price: pkg.packagePrice,
            })),
        ],
        [labtest, laboratoryPackage],
    );

    const filteredServices = useMemo(() => {
        const lowerSearch = searchQuery.toLowerCase();
        return combinedServices.filter((item) => {
            const matchesType = filterType === 'all' || item.type === filterType;
            const matchesSearch = item.name.toLowerCase().includes(lowerSearch) || item.description.toLowerCase().includes(lowerSearch);
            return matchesType && matchesSearch;
        });
    }, [combinedServices, filterType, searchQuery]);

    const { mutate } = useMutation({
        mutationFn: addToCart,
        onSuccess: async (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                toast.fire({
                    icon: 'success',
                    title: 'Added to cart',
                    padding: '10px 20px',
                });
                queryClient.invalidateQueries({ queryKey: ['getcart', currentId] });
                refetchData();
            }
        },
        onError: (err: AxiosError) => {
            toast.fire({
                icon: 'error',
                title: `${err.message}`,
                padding: '10px 20px',
            });
        },
    });

    const handleSelect = (record: GetDiscountDto) => {
        submitDiscount(Number(currentId), record.id);
        refetchData();
        setOpenDiscountModel(false);
        setDiscountApplied(true);
    };

    const handleSubmitPayment = (e: React.FormEvent) => {
        e.preventDefault();
        const requiredFields = ['paymentType', 'amountPaid'];
        const isEmpty = requiredFields.some((field) => {
            const value = (formData as any)[field];
            return !value || value.toString().trim() === '';
        });
        if (isEmpty) {
            alert();
            return;
        }
        confirmAlert({
            title: 'Process Payment?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            confirmButtonText: 'Yes, Process!',
            cancelButtonText: 'No, cancel!',
            onConfirm: () => {
                if (!currentId) {
                    swalWithBootstrapButtons.fire('Opss!', 'Missing client or package ID.', 'error');
                    return;
                }
                if (Number(formData.amountPaid) < totalAmount) {
                    swalWithBootstrapButtons.fire('Opss!', 'Insufficient payment amount.', 'error');
                    return;
                }
                onSubmit({
                    clientId: currentId,
                    amountPaid: formData.amountPaid,
                    paymentType: formData.paymentType,
                    change: formData.change,
                    paymentReference: formData.paymentReference,
                    totalAmount: totalAmount,
                    remarks: formData.remarks,
                });
            },
            onCancel: () => {
                console.log('Action cancelled!');
            },
        });
    };

    const handleClosePaymentModal = () => {
        setOpenPaymentModal(false);
        setFormData(initialFormData);
    };

    const { mutate: payment } = useMutation({
        mutationFn: createTransaction,
        onSuccess: async (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                router.push(`/patient-registration`);
                swalWithBootstrapButtons.fire('Payment success!', 'Your payment has been saved.', 'success');
            }
        },
        onError: (err: AxiosError) => {
            swalWithBootstrapButtons.fire(`${err.message}`, 'error');
        },
    });

    const onSubmit = ({
        clientId,
        amountPaid,
        paymentType,
        change,
        paymentReference,
        totalAmount,
        remarks,
    }: {
        clientId: number | string;
        amountPaid: string;
        paymentType: string;
        change: number;
        paymentReference: string;
        totalAmount: number;
        remarks: string;
    }) => {
        payment({
            clientId: Number(clientId),
            amountPaid: amountPaid,
            paymentType: paymentType,
            change: change,
            paymentReference: paymentReference || 'N/A',
            totalAmount: totalAmount,
            remarks: remarks || 'No remarks',
        });
    };
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 ">
                <div className="col-span-5">
                    <div className="mb-10">
                        <div className="relative inline-flex align-middle">
                            <button type="button" className="btn btn-info ltr:rounded-r-none rtl:rounded-l-none" onClick={() => setFilterType('all')}>
                                All
                            </button>
                            <button type="button" className="btn btn-info rounded-none" onClick={() => setFilterType('labTest')}>
                                Lab Tests
                            </button>
                            <button type="button" className="btn btn-info ltr:rounded-l-none rtl:rounded-r-none" onClick={() => setFilterType('laboratoryPackage')}>
                                Packages
                            </button>
                        </div>
                    </div>
                    <div className="p-5 shadow-md rounded-lg  bg-white dark:bg-black">
                        {/* Search bar should not be inside the grid */}
                        <div className="mb-3">
                            <div className="flex">
                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    <IconSearch />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base"
                                />
                            </div>
                        </div>

                        <ScrollArea h={550} className="w-full mt-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 flex items-center">
                                {filteredServices.map((item) => (
                                    <div key={`${item.type}-${item.id}`} className="cursor-pointer">
                                        <input
                                            type="checkbox"
                                            id={`item-${item.id}`}
                                            value={item.name}
                                            className="hidden peer"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    if (!currentId) {
                                                        toast.fire({
                                                            icon: 'error',
                                                            title: `Client ID not found.`,
                                                            padding: '10px 20px',
                                                        });
                                                        return;
                                                    }
                                                    const payload = {
                                                        clientId: currentId,
                                                        packageId: item.type === 'laboratoryPackage' ? item.id : 0,
                                                        labTestId: item.type === 'labTest' ? item.id : 0,
                                                        totalAmount: Number(item.price),
                                                    };
                                                    mutate(payload);
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor={`item-${item.id}`}
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer 
                               dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 
                               dark:peer-checked:border-blue-600 hover:text-gray-600 
                               dark:peer-checked:text-gray-300 peer-checked:text-gray-600 
                               hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <div>
                                                <div className="text-sm font-semibold"> {item.name}</div>
                                                <div className="text-lg font-bold"> ₱ {item.price} </div>
                                                <div className="text-sm">{item.description}</div>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
                <div className="shadow-md rounded-lg  bg-white dark:bg-black col-span-2 h-full">
                    <div className="bg-black dark:bg-white rounded-tr-lg rounded-tl-lg p-5">
                        <h2 className="text-green-500 text-3xl">{!totalAmount ? '₱ 0.00' : `₱ ${totalAmount}`}</h2>
                    </div>
                    <ScrollArea h={340} className="p-5">
                        {cartdata.map((item) => (
                            <div key={item.labTestId !== 0 ? `labtest-${item.labTestId}` : `package-${item.packageId}`} className="flex justify-between mb-2">
                                <p>{item.labTestId !== 0 ? item.testName : item.packageName}</p>
                                <div className="flex flex-row gap-4">
                                    <span className="badge bg-danger" onClick={() => removeCart(item.id)}>
                                        <IconTrash className="h-4 w-4" />
                                    </span>
                                    <p>₱{item.labTestId !== 0 ? item.price.toFixed(2) : item.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                    <div className="p-2 flex flex-col gap-2 justify-end">
                        <button className="btn btn-warning w-full btn-lg flex flex-row gap-2" onClick={() => setOpenDiscountModel(true)} disabled={discountApplied}>
                            <IconCircleCheck /> Apply Discount
                        </button>
                        <button className="btn btn-danger w-full btn-lg flex flex-row gap-2">
                            <IconX /> Cancel Transaction
                        </button>
                        <button className="btn btn-info w-full btn-lg flex flex-row gap-2" onClick={() => setOpenPaymentModal(true)}>
                            <IconDollarSignCircle /> Process Payment
                        </button>
                    </div>
                </div>
            </div>
            <CustomModal
                isOpen={openDiscountModal}
                onClose={() => setOpenDiscountModel(false)}
                title="Apply Discount"
                size="max-w-2xl"
                onSave={() => {
                    console.log('Saved!');
                    setOpenDiscountModel(false);
                }}
            >
                <CustomDataTable<GetDiscountDto> data={data} columns={discountHeaderColumns(handleSelect)} searchFields={['id', 'discountDescription']} minHeight={50} height={300} />
            </CustomModal>
            <CustomModal
                isOpen={openPaymentModal}
                onClose={handleClosePaymentModal}
                title="Payment Window"
                size="max-w-xl"
                onSave={() => {
                    setOpenPaymentModal(false);
                }}
            >
                <div className="w-full">
                    <div className="flex flex-col gap-2 p-5">
                        <div className="custom-select">
                            <label>
                                Payment Type <span className="text-red-500">(required)</span>
                            </label>
                            <Select
                                options={PaymentType}
                                isSearchable={true}
                                value={formData.paymentType ? { value: formData.paymentType, label: formData.paymentType } : null}
                                onChange={(opt) => setFormData({ ...formData, paymentType: opt?.value ?? '' })}
                            />
                        </div>
                        {(formData.paymentType === 'Online Payment' || formData.paymentType === 'Card') && (
                            <input
                                type="text"
                                placeholder="Reference Number (Optional)"
                                className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                value={formData.paymentReference}
                                onChange={(e) => setFormData({ ...formData, paymentReference: e.target.value })}
                            />
                        )}

                        <h1 className="font-bold text-3xl mt-10">
                            Total Amount: <span className="text-green-600">₱ {totalAmount}</span>
                        </h1>
                        <input
                            type="text"
                            placeholder="Payment Received (required)"
                            className="form-input form-input-lg"
                            value={formData.amountPaid}
                            onChange={(e) => {
                                const paymentReceived = e.target.value;
                                const numericPayment = Number(paymentReceived) || 0;
                                setFormData({
                                    ...formData,
                                    amountPaid: paymentReceived,
                                    change: numericPayment - totalAmount, // ✅ auto compute change
                                });
                            }}
                            autoFocus
                        />
                        <div className="flex">
                            <div className="bg-primary flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                Change
                            </div>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base"
                                value={formData.change?.toFixed(2) ?? '0.00'}
                                readOnly
                            />
                        </div>
                        <div className="flex">
                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap">
                                Remarks (Optional)
                            </div>
                            <textarea
                                rows={2}
                                className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"
                                value={formData.remarks}
                                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                            ></textarea>
                        </div>
                    </div>
                    <button className="btn btn-success mt-2 w-full btn-lg" onClick={handleSubmitPayment}>
                        Process Payment
                    </button>
                </div>
            </CustomModal>
        </div>
    );
}
