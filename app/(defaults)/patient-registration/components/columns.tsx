import { GetClientDTO } from '@/types/DTO/Client.dto';
import { DataTableColumn } from 'mantine-datatable';

export const clientColumnHeader = (onSelect: (record: GetClientDTO) => void): DataTableColumn<GetClientDTO>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    {
        accessor: 'fullName',
        title: 'Patient Full Name',
        sortable: true,
        render: (record) => (
            <div className="flex flex-row gap-2 items-center justify-center">
                {record.firstName} {record.middleName} {record.lastName}
            </div>
        ),
    },
    { accessor: 'dateOfBirth', title: 'Date of Birth', sortable: true },
    { accessor: 'gender', title: 'Gender', sortable: true },
    { accessor: 'flag', title: 'Flag', sortable: true },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-center">
                <button type="button" className="btn btn-success btn-sm" onClick={() => onSelect(record)}>
                    SELECT
                </button>
            </div>
        ),
    },
];
