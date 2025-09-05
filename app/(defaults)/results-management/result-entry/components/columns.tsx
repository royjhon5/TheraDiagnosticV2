import { DataTableColumn } from 'mantine-datatable';
import dayjs from 'dayjs';
import { ReprintEntireOR, ReprintORPerTest } from '@/api/services/transaction.api';
import { GetAllLabResultWithClientDTO } from '@/types/DTO/Laboratoryresult.dto';

export const labResultsColumenHeader = (
    onOpenHematology: (record: GetAllLabResultWithClientDTO) => void,
    onEditHematology: (record: GetAllLabResultWithClientDTO) => void,
    onOpenClinMic: (record: GetAllLabResultWithClientDTO) => void,
    onEditClinMic: (record: GetAllLabResultWithClientDTO) => void,
    onOpenChem: (record: GetAllLabResultWithClientDTO) => void,
    onEditChem: (record: GetAllLabResultWithClientDTO) => void,
    onOpenSero: (record: GetAllLabResultWithClientDTO) => void,
    onEditSero: (record: GetAllLabResultWithClientDTO) => void,
    onOpenSeroHIV: (record: GetAllLabResultWithClientDTO) => void,
    onEditSeroHIV: (record: GetAllLabResultWithClientDTO) => void,
): DataTableColumn<GetAllLabResultWithClientDTO>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    {
        accessor: 'fullName',
        title: 'Patient Full Name',
        sortable: true,
        render: (record) => (
            <div className="flex flex-row gap-2">
                {record.firstName} {record.middleName} {record.lastName}
            </div>
        ),
    },
    {
        accessor: 'DateCreated',
        title: 'Transaction Date',
        sortable: true,
        render: (record) => <span className="badge bg-success">{dayjs(record.dateCreated).format('MMMM DD, YYYY hh:mm a')}</span>,
    },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-2 items-center justify-end">
                {record?.testCategories.some((tc) => tc.category === 'HEMATOLOGY') &&
                    (record.hemaId === 0 ? (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onOpenHematology(record)}>
                            OPEN HEMATOLOGY
                        </button>
                    ) : (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onEditHematology(record)}>
                            EDIT HEMATOLOGY
                        </button>
                    ))}
                {record?.testCategories.some((tc) => tc.category === 'CLINICAL MICROSCOPY') &&
                    (record.hemaId === 0 ? (
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => onOpenClinMic(record)}>
                            OPEN CLINICAL MICROSCOPY
                        </button>
                    ) : (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onEditClinMic(record)}>
                            EDIT CLINICAL MICROSCOPY
                        </button>
                    ))}
                {record?.testCategories.some((tc) => tc.category === 'CLINICAL CHEMISTRY') &&
                    (record.hemaId === 0 ? (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => onOpenChem(record)}>
                            OPEN CLINICAL CHEMISTRY
                        </button>
                    ) : (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onEditChem(record)}>
                            EDIT CLINICAL CHEMISTRY
                        </button>
                    ))}
                {record?.testCategories.some((tc) => tc.category === 'SEROLOGY') &&
                    (record.hemaId === 0 ? (
                        <button type="button" className="btn btn-warning btn-sm" onClick={() => onOpenSero(record)}>
                            OPEN SEROLOGY
                        </button>
                    ) : (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onEditSero(record)}>
                            EDIT SEROLOGY
                        </button>
                    ))}
                {record?.testCategories.some((tc) => tc.category === 'SEROLOGY HIV') &&
                    (record.hemaId === 0 ? (
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => onOpenSeroHIV(record)}>
                            OPEN SEROLOGY HIV
                        </button>
                    ) : (
                        <button type="button" className="btn btn-info btn-sm" onClick={() => onEditSeroHIV(record)}>
                            EDIT SEROLOGY HIV
                        </button>
                    ))}
            </div>
        ),
    },
];
