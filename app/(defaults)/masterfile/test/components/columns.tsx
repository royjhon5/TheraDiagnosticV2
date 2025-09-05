import IconPencil from '@/components/icon/icon-pencil';
import IconTrash from '@/components/icon/icon-trash';
import { getLaboratoryTestDto } from '@/types/DTO/LaboratoryTest.dto';
import { DataTableColumn } from 'mantine-datatable';

export const laboratoryTestColumns = (onEdit: (record: getLaboratoryTestDto) => void, onDelete: (record: getLaboratoryTestDto) => void): DataTableColumn<getLaboratoryTestDto>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    { accessor: 'testName', title: 'Test Name', sortable: true },
    { accessor: 'testCategory', title: 'Category', sortable: true },
    { accessor: 'price', title: 'Price', sortable: true },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => onEdit(record)}>
                    <IconPencil />
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(record)} // 👈 now wired to delete hook
                >
                    <IconTrash />
                </button>
            </div>
        ),
    },
];
