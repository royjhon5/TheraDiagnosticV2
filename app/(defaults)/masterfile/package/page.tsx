'use client';

import { laboratoryPackageColumns } from '@/app/(defaults)/masterfile/package/components/columns';
import { showAlert } from '@/app/(defaults)/patient-registration/components/options';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useSaveLaboratoryPackage from '@/hooks/mastefile/package/useCreateLaboratoryPackage';
import useDeletePackage from '@/hooks/mastefile/package/useDeletePackage';
import useEditPackage from '@/hooks/mastefile/package/useEditPackage';
import useGetLaboratoryPackage from '@/hooks/mastefile/package/useGetLaboratoryPackage';
import useGetLaboratoryTest from '@/hooks/mastefile/test/useGetLabTest';
import { getLaboratoryPackageDto, PackageItemDto } from '@/types/DTO/LaboratoryPackage.dto';
import { ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function TestPackage() {
    const { labtest } = useGetLaboratoryTest();
    const { laboratoryPackage } = useGetLaboratoryPackage();
    const { deletePackage } = useDeletePackage();
    const { mutate: savePackage } = useSaveLaboratoryPackage();
    const data: getLaboratoryPackageDto[] = laboratoryPackage ?? [];
    const [formData, setFormData] = useState<Partial<getLaboratoryPackageDto>>({});
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const { mutate: updatePackage } = useEditPackage();
    const filteredTests = labtest?.filter((test) => test.testName.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleSelect = (id: number) => {
        setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    };
    const selectedPackages: PackageItemDto[] =
        labtest
            ?.filter((test) => selectedIds.includes(test.id))
            .map((test) => ({
                itemId: test.id,
                itemName: test.testName,
                itemPrice: test.price,
                itemCategory: test.testCategory,
            })) ?? [];
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.packageName || !formData.validUntil || !formData.packagePrice) {
            alert('Please fill in all required fields.');
            return;
        }
        const selectedPackages: PackageItemDto[] =
            labtest
                ?.filter((test) => selectedIds.includes(test.id))
                .map((test) => ({
                    itemId: test.id,
                    itemName: test.testName,
                    itemPrice: test.price,
                    itemCategory: test.testCategory,
                })) ?? [];

        const payload: getLaboratoryPackageDto = {
            id: formData.id ?? 0,
            packageName: formData.packageName,
            validUntil: formData.validUntil,
            packagePrice: formData.packagePrice,
            packages: selectedPackages,
        };

        savePackage(payload);

        setFormData({});
        setSelectedIds([]);
    };

    const handleUpdateData = (e: React.FormEvent) => {
        e.preventDefault();
        updatePackage({
            id: formData.id ?? 0,
            packageName: formData.packageName ?? '',
            packagePrice: formData.packagePrice ?? 0,
            packages: selectedPackages,
            validUntil: formData.validUntil ?? '',
        });
    };

    const handleDelete = (record: getLaboratoryPackageDto) => {
        showAlert(() => deletePackage(record.id));
    };

    const handleEdit = (record: getLaboratoryPackageDto) => {
        setFormData({ id: record.id, packageName: record.packageName, validUntil: record.validUntil ? record.validUntil.split('T')[0] : '', packagePrice: record.packagePrice });
        setSearchTerm('');
        const mappedIds = (record.packages ?? [])
            .map((pkg) => {
                const matchById = labtest?.find((t) => Number(t.id) === Number(pkg.itemId));
                if (matchById) return Number(matchById.id);
                const matchByName = labtest?.find((t) => String(t.testName).trim() === String(pkg.itemName).trim());
                if (matchByName) return Number(matchByName.id);
                return Number(pkg.itemId);
            })
            .filter(Boolean) as number[];
        setSelectedIds(mappedIds);
    };

    const handleclear = () => {
        setFormData({});
        setSelectedIds([]);
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
                    <span>Package</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div className="col-span-2">
                    <div className="flex flex-col gap-4">
                        {/* Form Section */}
                        <form className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 shadow-md rounded-lg bg-white dark:bg-black">
                            <div>
                                <label htmlFor="fullname">Package Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Test Name"
                                    className="form-input"
                                    required
                                    value={formData.packageName ?? ''}
                                    onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="fullname">Valid Until</label>
                                <input
                                    type="date"
                                    className="form-input"
                                    required
                                    value={formData.validUntil ?? ''} // 👈 default to empty string
                                    onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="fullname">Package Price</label>
                                <input
                                    type="text"
                                    placeholder="Enter Price"
                                    className="form-input"
                                    required
                                    value={formData.packagePrice?.toString() ?? ''}
                                    onChange={(e) => setFormData({ ...formData, packagePrice: Number(e.target.value) })}
                                />
                            </div>
                            <div className="flex flex-row gap-3 w-full">
                                {formData.id ? (
                                    <button type="button" className="btn btn-info" onClick={handleUpdateData}>
                                        Update
                                    </button>
                                ) : (
                                    <button type="button" className="btn btn-info" onClick={handleSubmit}>
                                        Save
                                    </button>
                                )}
                                <button type="button" className="btn btn-success" onClick={handleclear}>
                                    Clear
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg p-5 bg-white dark:bg-black">
                            <input type="text" placeholder="Search test" className="form-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                            <ScrollArea h={450} className="w-full">
                                {filteredTests?.map((test) => {
                                    const idNum = Number(test.id); // normalize
                                    return (
                                        <div key={idNum} className="flex flex-row gap-2 items-center">
                                            <label className="checkbox-wrapper cursor-pointer">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <input type="checkbox" className="checkbox-input" value={idNum} checked={selectedIds.includes(idNum)} onChange={() => handleSelect(idNum)} />
                                                    {test.testName}
                                                </div>
                                            </label>
                                        </div>
                                    );
                                })}
                            </ScrollArea>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <CustomDataTable<getLaboratoryPackageDto>
                        data={data}
                        columns={laboratoryPackageColumns(handleEdit, handleDelete)}
                        searchFields={['id', 'packageName']}
                        minHeight={200}
                        height={550}
                    />
                </div>
            </div>
        </div>
    );
}
