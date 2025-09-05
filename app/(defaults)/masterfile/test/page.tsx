'use client';
import { laboratoryTestColumns } from '@/app/(defaults)/masterfile/test/components/columns';
import { options, showAlert } from '@/app/(defaults)/masterfile/test/components/options';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useSaveLaboratoryTest from '@/hooks/mastefile/test/useCreateLaboratoryTest';
import useDeleteTest from '@/hooks/mastefile/test/useDeleteTest';
import useGetLaboratoryTest from '@/hooks/mastefile/test/useGetLabTest';
import useUpdateLaboratoryTest from '@/hooks/mastefile/test/useUpdateLaboratoryTest';
import { getLaboratoryTestDto } from '@/types/DTO/LaboratoryTest.dto';
import Link from 'next/link';
import { useState } from 'react';
import Select from 'react-select';
export default function LabTest() {
    const { labtest } = useGetLaboratoryTest();
    const data: getLaboratoryTestDto[] = labtest ?? [];
    const [formData, setFormData] = useState<Partial<getLaboratoryTestDto>>({});
    const { mutate: saveLabTest, isPending } = useSaveLaboratoryTest();
    const { onSubmit, isLoading } = useUpdateLaboratoryTest();
    const { deleteTest } = useDeleteTest();
    const handleEdit = (record: getLaboratoryTestDto) => {
        setFormData(record);
    };
    const handleClear = () => {
        setFormData({});
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.testName && formData.testCategory && typeof formData.price === 'number') {
            saveLabTest({
                testName: formData.testName,
                testCategory: formData.testCategory,
                price: formData.price,
            });
            setFormData({});
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const handleUpdateData = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.id !== undefined && formData.testName && formData.testCategory && typeof formData.price === 'number') {
            onSubmit({
                id: formData.id,
                testName: formData.testName,
                testCategory: formData.testCategory,
                price: formData.price,
            });
            setFormData({});
        } else {
            alert('Please fill in all required fields for update.');
        }
    };

    const handleDelete = (record: getLaboratoryTestDto) => {
        showAlert(() => deleteTest(record.id));
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
                    <span>Tests</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="col-span-1">
                    <form className="rounded-lg p-5 shadow-md bg-white dark:bg-black">
                        <div className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="fullname">Test Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Test Name"
                                    className="form-input"
                                    value={formData.testName ?? ''}
                                    onChange={(e) => setFormData({ ...formData, testName: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="fullname">Category</label>
                                <Select
                                    value={formData.testCategory ? { value: formData.testCategory, label: formData.testCategory } : null}
                                    options={options}
                                    onChange={(opt) => setFormData({ ...formData, testCategory: opt?.value ?? '' })}
                                    isSearchable={false}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="fullname">Amount</label>
                                <input
                                    type="text"
                                    placeholder="Enter Amount"
                                    className="form-input"
                                    value={formData.price?.toString() ?? ''}
                                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                    required
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
                    <CustomDataTable<getLaboratoryTestDto>
                        data={data}
                        columns={laboratoryTestColumns(handleEdit, handleDelete)}
                        searchFields={['id', 'testName', 'testCategory']}
                        minHeight={200}
                        height={550}
                    />
                </div>
            </div>
        </div>
    );
}
