import { GetClientDTO } from '@/types/DTO/Client.dto';
import { DataTableColumn } from 'mantine-datatable';
import dayjs from 'dayjs';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import { generateMedicalReportPdf } from '@/api/services/client.api';

export const clientColumnHeader = (onSelect: (record: GetClientDTO) => void): DataTableColumn<GetClientDTO>[] => [
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
        accessor: 'dateOfBirth',
        title: 'Date of Birth',
        sortable: true,
        render: (record) => <span>{dayjs(record.dateOfBirth).format('MMM DD, YYYY')}</span>,
    },
    { accessor: 'gender', title: 'Gender', sortable: true },
    { accessor: 'flag', title: 'Flag', sortable: true, render: (record) => <span className="badge bg-primary">{record.flag}</span> },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-end">
                <div className="dropdown">
                    <Dropdown
                        placement={`bottom-start`}
                        btnClassName="btn btn-primary btn-sm dropdown-toggle"
                        button={
                            <>
                                GENERATE FORMS
                                <span>
                                    <IconCaretDown className="inline-block ltr:ml-1 rtl:mr-1" />
                                </span>
                            </>
                        }
                    >
                        <ul className="!min-w-[170px]">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        generateMedicalReportPdf(Number(record.id));
                                    }}
                                >
                                    Annual Physical Examination Form
                                </button>
                            </li>
                            <li>
                                <button type="button">Medical Examination Form</button>
                            </li>
                        </ul>
                    </Dropdown>
                </div>
                <button type="button" className="btn btn-warning btn-sm" onClick={() => onSelect(record)}>
                    EDIT
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => onSelect(record)}>
                    DELETE
                </button>
            </div>
        ),
    },
];
