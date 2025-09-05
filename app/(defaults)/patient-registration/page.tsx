'use client';

import { clientColumnHeader } from '@/app/(defaults)/patient-registration/components/columns';
import { appointentTypeOptions, civilStatusOptions, genderOptions, patientTypeOptions, transactionTypeOptions } from '@/app/(defaults)/patient-registration/components/options';
import { alert } from '@/app/(defaults)/patient-registration/components/Swal';
import CustomDataTable from '@/components/datatables/custom-datatables';
import IconSave from '@/components/icon/icon-save';
import IconSearch from '@/components/icon/icon-search';
import CustomModal from '@/components/reusable/CustomModal';
import useCreateClient from '@/hooks/client/useCreateClient';
import useGetClient from '@/hooks/client/useGetClient';
import useUpdateClient from '@/hooks/client/useUpdateClient';
import { CreateClientDto, GetClientDTO } from '@/types/DTO/Client.dto';
import Link from 'next/link';
import { useState } from 'react';
import Select from 'react-select';
const today = new Date().toISOString().split('T')[0];
const initialFormData = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    emailAddress: '',
    flag: '',
    isPriority: '',
    employersId: 0,
    status: '',
    civilStatus: '',
    appointmentType: '',
    appointmentDate: today,
};

export default function PatientRegistration() {
    const { clients } = useGetClient();
    const data: GetClientDTO[] = clients ?? [];
    const [formData, setFormData] = useState<CreateClientDto>(initialFormData);
    const { mutate: saveClient, isPending } = useCreateClient();
    const { mutate: updateClient, isLoading } = useUpdateClient();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handlClear = () => {
        setFormData(initialFormData);
    };

    const handleSelect = (record: GetClientDTO) => {
        setFormData({
            ...record,
            dateOfBirth: record.dateOfBirth ? record.dateOfBirth.split('T')[0] : '',
            appointmentDate: record.appointmentDate ? record.appointmentDate.split('T')[0] : '',
        });
        setModalOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const requiredFields = ['appointmentType', 'appointmentDate', 'firstName', 'lastName', 'dateOfBirth', 'address', 'civilStatus', 'isPriority', 'flag'];
        const isEmpty = requiredFields.some((field) => {
            const value = (formData as any)[field];
            return !value || value.toString().trim() === '';
        });
        if (isEmpty) {
            alert();
            return;
        }
        saveClient(formData);
        setFormData(initialFormData);
    };

    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const requiredFields = ['appointmentType', 'appointmentDate', 'firstName', 'lastName', 'dateOfBirth', 'address', 'civilStatus', 'isPriority', 'flag', 'gender'];
        const isEmpty = requiredFields.some((field) => {
            const value = (formData as any)[field];
            return !value || value.toString().trim() === '';
        });
        if (isEmpty) {
            alert();
            return;
        }
        updateClient(formData);
        setFormData(initialFormData);
    };
    const calculateAge = (dob: string): string => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
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
                    <span>Patient Registration</span>
                </li>
            </ul>
            <form className="p-5 shadow-sm bg-white dark:bg-black rounded-lg">
                <div className="flex gap-3 w-full justify-between">
                    <h1 className="text-2xl font-bold">Patient Registration</h1>
                    <div className="flex flex-row gap-3">
                        <button type="button" className="btn btn-info" onClick={() => setModalOpen(true)}>
                            <IconSearch className="mr-3" /> Search Previous Patient
                        </button>
                        <button type="button" className="btn btn-warning">
                            <IconSearch className="mr-3" />
                            Search Employee
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 gap-5">
                    <div className="col-span-1 custom-select">
                        <label>
                            Appointment Type <span className="text-red-500">(required)</span>
                        </label>
                        <Select
                            value={formData.appointmentType ? { value: formData.appointmentType, label: formData.appointmentType } : null}
                            onChange={(opt) => setFormData({ ...formData, appointmentType: opt?.value ?? '' })}
                            options={appointentTypeOptions}
                            isSearchable={true}
                        />
                    </div>
                    <div className="col-span-1">
                        <label>Appointment Date</label>
                        <input type="date" value={formData.appointmentDate} onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })} className="form-input" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5">
                    <div>
                        <label>
                            First Name <span className="text-red-500">(required)</span>
                        </label>
                        <input type="text" placeholder="Enter First Name" className="form-input" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>
                    <div>
                        <label>
                            Middle Name <span className="text-green-500">(Optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Middle Name"
                            className="form-input"
                            value={formData.middleName}
                            onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>
                            Last Name <span className="text-red-500">(required)</span>
                        </label>
                        <input type="text" placeholder="Enter Last Name" className="form-input" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                    <div>
                        <label>
                            Date of Birth <span className="text-red-500">(required)</span>
                        </label>
                        <input
                            type="date"
                            className="form-input"
                            value={formData.dateOfBirth}
                            onChange={(e) => {
                                const dob = e.target.value;
                                setFormData({
                                    ...formData,
                                    dateOfBirth: dob,
                                    age: calculateAge(dob), // auto update age
                                });
                            }}
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="text" className="form-input" value={formData.age} readOnly />
                    </div>
                    <div className="col-span-2">
                        <label>
                            Address <span className="text-red-500">(required)</span>
                        </label>
                        <input type="text" placeholder="Enter Address" className="form-input" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </div>
                    <div>
                        <label>
                            Contact Number <span className="text-red-500">(required)</span>
                        </label>
                        <div className="flex flex-1">
                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                63+
                            </div>
                            <input
                                type="number"
                                placeholder="91728392..."
                                className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                value={formData.contactNumber}
                                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label>Email</label>
                        <div className="flex flex-1">
                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                @
                            </div>
                            <input
                                type="email"
                                placeholder=""
                                className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                value={formData.emailAddress}
                                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="custom-select">
                        <label>
                            Gender <span className="text-red-500">(required)</span>
                        </label>
                        <Select
                            options={genderOptions}
                            isSearchable={true}
                            value={formData.gender ? { value: formData.gender, label: formData.gender } : null}
                            onChange={(opt) => setFormData({ ...formData, gender: opt?.value ?? '' })}
                        />
                    </div>
                    <div className="custom-select">
                        <label>
                            Civil Status <span className="text-red-500">(required)</span>
                        </label>
                        <Select
                            options={civilStatusOptions}
                            isSearchable={true}
                            value={formData.civilStatus ? { value: formData.civilStatus, label: formData.civilStatus } : null}
                            onChange={(opt) => setFormData({ ...formData, civilStatus: opt?.value ?? '' })}
                        />
                    </div>
                    <div className="custom-select">
                        <label>
                            Patient Type <span className="text-red-500">(required)</span>
                        </label>
                        <Select
                            options={patientTypeOptions}
                            isSearchable={true}
                            value={formData.isPriority ? { value: formData.isPriority, label: formData.isPriority } : null}
                            onChange={(opt) => setFormData({ ...formData, isPriority: opt?.value ?? '' })}
                        />
                    </div>
                    <div className="custom-select">
                        <label>
                            Transaction Type <span className="text-red-500">(required)</span>
                        </label>
                        <Select
                            options={transactionTypeOptions}
                            isSearchable={true}
                            value={formData.flag ? { value: formData.flag, label: formData.flag } : null}
                            onChange={(opt) => setFormData({ ...formData, flag: opt?.value ?? '' })}
                        />
                    </div>
                </div>
                <div className="mt-10 flex flex-row gap-5">
                    <button type="submit" className={`btn ${formData.id ? 'btn-info' : 'btn-success'}`} onClick={formData.id ? handleUpdateSubmit : handleSubmit}>
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
                    <button type="button" className="btn btn-danger" onClick={handlClear}>
                        Clear Fields
                    </button>
                </div>
            </form>
            <CustomModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Search a Patient"
                size="max-w-5xl"
                onSave={() => {
                    console.log('Saved!');
                    setModalOpen(false);
                }}
            >
                <CustomDataTable<GetClientDTO> data={data} columns={clientColumnHeader(handleSelect)} searchFields={['id', 'firstName', 'emailAddress']} minHeight={50} height={550} />
            </CustomModal>
        </div>
    );
}
