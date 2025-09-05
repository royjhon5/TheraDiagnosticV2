'use client';
import { clientColumnHeader } from '@/app/(defaults)/patient-management/components/columns';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useGetClient from '@/hooks/client/useGetClient';
import { GetClientDTO } from '@/types/DTO/Client.dto';
import Link from 'next/link';
export default function PatientManagementComponent() {
    const { clients } = useGetClient();
    const data: GetClientDTO[] = clients ?? [];
    const handleEdit = (record: GetClientDTO) => {
        console.log(record);
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
                    <span>Patient Management</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-5">
                <div className="col-span-3">
                    <CustomDataTable<GetClientDTO>
                        data={data}
                        columns={clientColumnHeader(handleEdit)}
                        searchFields={['id', 'firstName', 'lastName']}
                        minHeight={200}
                        height={550}
                        title="Patient Management"
                    />
                </div>
            </div>
        </div>
    );
}
