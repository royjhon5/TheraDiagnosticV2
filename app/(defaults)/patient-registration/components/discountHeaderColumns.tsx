import { GetDiscountDto } from '@/types/DTO/Discount..dto';
import { DataTableColumn } from 'mantine-datatable';

export const discountHeaderColumns = (onSelect: (record: GetDiscountDto) => void): DataTableColumn<GetDiscountDto>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    {
        accessor: 'discountDescription',
        title: 'Description',
        sortable: true,
    },
    { accessor: 'discountAmount', title: 'Discount Amount', sortable: true },
    {
        accessor: 'actions',
        title: '',
        render: (record) => (
            <div className="flex flex-row gap-3 items-center justify-center">
                <button type="button" className="btn btn-success btn-sm" onClick={() => onSelect(record)}>
                    Apply Discount
                </button>
            </div>
        ),
    },
];
