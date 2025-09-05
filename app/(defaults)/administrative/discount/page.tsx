'use client';
import { discountColumns } from '@/app/(defaults)/administrative/discount/components/columns';
import { showAlert } from '@/app/(defaults)/masterfile/test/components/options';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useCreateDiscount from '@/hooks/discount/useCreateDiscount';
import useDeleteDiscount from '@/hooks/discount/useDeleteDiscount';
import useEditDiscount from '@/hooks/discount/useEditDiscount';
import useGetDiscount from '@/hooks/discount/useGetDiscount';
import useDeleteTest from '@/hooks/mastefile/test/useDeleteTest';
import { GetDiscountDto } from '@/types/DTO/Discount..dto';
import Link from 'next/link';
import { useState } from 'react';
export default function DiscountComponent() {
    const { discountData } = useGetDiscount();
    const data: GetDiscountDto[] = discountData ?? [];
    const [formData, setFormData] = useState<Partial<GetDiscountDto>>({});
    const { mutate: saveDiscount, isPending } = useCreateDiscount();
    const { mutate: updateDiscount, isLoading } = useEditDiscount();
    const { deleteDiscount } = useDeleteDiscount();
    const handleEdit = (record: GetDiscountDto) => {
        setFormData(record);
    };
    const handleClear = () => {
        setFormData({});
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.discountDescription && typeof formData.discountAmount === 'number') {
            saveDiscount({
                discountDescription: formData.discountDescription,
                discountAmount: formData.discountAmount,
            });
            setFormData({});
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const handleUpdateData = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.id !== undefined && formData.discountDescription && typeof formData.discountAmount === 'number') {
            updateDiscount({
                id: formData.id,
                discountDescription: formData.discountDescription,
                discountAmount: formData.discountAmount,
            });
            setFormData({});
        } else {
            alert('Please fill in all required fields for update.');
        }
    };

    const handleDelete = (record: GetDiscountDto) => {
        showAlert(() => deleteDiscount(record.id));
    };

    return (
        <div>
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Discount</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="col-span-1">
                    <form className="rounded-lg p-5 shadow-md bg-white dark:bg-black">
                        <div className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="fullname">Discount Description</label>
                                <input
                                    type="text"
                                    placeholder="Enter Test Name"
                                    className="form-input"
                                    value={formData.discountDescription ?? ''}
                                    onChange={(e) => setFormData({ ...formData, discountDescription: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="fullname">Amount</label>
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-input"
                                    value={formData.discountAmount ?? ''} // keep it as number or empty string
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            discountAmount: e.target.value === '' ? undefined : parseFloat(e.target.value),
                                        })
                                    }
                                    step="0.01"
                                    min="0"
                                />
                            </div>
                            <div className="flex flex-row gap-3">
                                <button type="submit" className="btn btn-info" onClick={formData.id ? handleUpdateData : handleSubmit}>
                                    {formData.id ? (
                                        isLoading ? (
                                            <div className="flex flex-row items-center">
                                                <span className="animate-ping w-2 h-2 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
                                                Updating...
                                            </div>
                                        ) : (
                                            'Update'
                                        )
                                    ) : isPending ? (
                                        <div className="flex flex-row items-center">
                                            <span className="animate-ping w-2 h-2 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
                                            Saving...
                                        </div>
                                    ) : (
                                        'Save'
                                    )}
                                </button>
                                <button type="button" className="btn btn-success" onClick={handleClear}>
                                    Clear
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-span-3">
                    <CustomDataTable<GetDiscountDto>
                        data={data}
                        columns={discountColumns(handleEdit, handleDelete)}
                        searchFields={['id', 'discountDescription', 'discountAmount']}
                        minHeight={200}
                        height={550}
                    />
                </div>
            </div>
        </div>
    );
}
