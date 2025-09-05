import { GetClientDTO } from '@/types/DTO/Client.dto';
import { DataTableColumn } from 'mantine-datatable';
import dayjs from 'dayjs';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import { generateMedicalReportPdf } from '@/api/services/client.api';
import { GetTransactionsDTO } from '@/types/DTO/Transaction.dto';
import { ReprintEntireOR, ReprintORPerTest } from '@/api/services/transaction.api';

export const transactionsColumnHeader = (onSelect: (record: GetTransactionsDTO) => void): DataTableColumn<GetTransactionsDTO>[] => [
    { accessor: 'transactionNumber', title: 'Transaction #', sortable: true },
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
    { accessor: 'DateCreated', title: 'Transaction Date', sortable: true, render: (record) => <span>{dayjs(record.dateCreated).format('MMM DD, YYYY')}</span> },
    { accessor: 'totalAmount', title: 'Total Amount', sortable: true, render: (record) => <span className="badge bg-info">{record.totalAmount}</span> },
    { accessor: 'amountPaid', title: 'Amount Paid', sortable: true, render: (record) => <span className="badge bg-danger">{record.amountPaid}</span> },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-end">
                <button type="button" className="btn btn-info btn-sm" onClick={() => ReprintEntireOR(record.id)}>
                    REPRINT OR
                </button>
                <button type="button" className="btn btn-warning btn-sm" onClick={() => ReprintORPerTest(record.id)}>
                    REPRINT OR PER TEST
                </button>
            </div>
        ),
    },
];
