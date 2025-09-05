import IconPencil from '@/components/icon/icon-pencil';
import IconTrash from '@/components/icon/icon-trash';
import { GetDiscountDto } from '@/types/DTO/Discount..dto';
import { DataTableColumn } from 'mantine-datatable';

export const discountColumns = (onEdit: (record: GetDiscountDto) => void, onDelete: (record: GetDiscountDto) => void): DataTableColumn<GetDiscountDto>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    { accessor: 'discountDescription', title: 'Test Name', sortable: true },
    { accessor: 'discountAmount', title: 'Category', sortable: true },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => onEdit(record)}>
                    <IconPencil />
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(record)}>
                    <IconTrash />
                </button>
            </div>
        ),
    },
];
