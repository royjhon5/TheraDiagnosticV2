'use client';
import { labResultsColumenHeader } from '@/app/(defaults)/results-management/result-entry/components/columns';
import HematologyModal from '@/app/(defaults)/results-management/result-entry/modals/HematologyModal';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useGetAllClientJoined from '@/hooks/laboratory-results/useGetAllClientJoined';
import { GetAllLabResultWithClientDTO } from '@/types/DTO/Laboratoryresult.dto';
import Link from 'next/link';
import { useState } from 'react';
export default function ResultsEntryComponent() {
    const { labresults } = useGetAllClientJoined();
    const data: GetAllLabResultWithClientDTO[] = labresults ?? [];
    const [hematologyModalOpen, sethematologyModalOpen] = useState<boolean>(false);
    const [selectedRecord, setSelectedRecord] = useState<GetAllLabResultWithClientDTO | null>(null);
    const handleOpenHematology = (record: GetAllLabResultWithClientDTO) => {
        console.log(record);
        sethematologyModalOpen(true);
        setSelectedRecord(record);
    };

    const handleEditHematology = (record: GetAllLabResultWithClientDTO) => {
        console.log(record);
        sethematologyModalOpen(true);
        setSelectedRecord(record);
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
                    <span>Results Entry</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-5">
                <div className="col-span-3">
                    <CustomDataTable<GetAllLabResultWithClientDTO>
                        data={data}
                        columns={labResultsColumenHeader(handleOpenHematology, handleEditHematology)}
                        searchFields={['id', 'firstName', 'lastName']}
                        minHeight={200}
                        height={550}
                        title="Laboratory Result Entry"
                    />
                </div>
            </div>

            {/* DIALOG CONTAINER */}
            <HematologyModal record={selectedRecord} isOpen={hematologyModalOpen} onClose={() => sethematologyModalOpen(false)} />
            <div></div>
        </div>
    );
}
