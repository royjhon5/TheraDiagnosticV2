import IconPencil from '@/components/icon/icon-pencil';
import IconTrash from '@/components/icon/icon-trash';
import { getLaboratoryPackageDto } from '@/types/DTO/LaboratoryPackage.dto';
import { getLaboratoryTestDto } from '@/types/DTO/LaboratoryTest.dto';
import { DataTableColumn } from 'mantine-datatable';

export const laboratoryPackageColumns = (onEdit: (record: getLaboratoryPackageDto) => void, onDelete: (record: getLaboratoryPackageDto) => void): DataTableColumn<getLaboratoryPackageDto>[] => [
    { accessor: 'id', title: 'ID', sortable: true },
    { accessor: 'packageName', title: 'Package Name', sortable: true },
    {
        accessor: 'packages',
        title: 'Test Name',
        sortable: true,
        render: (record) =>
            record.packages && record.packages.length > 0 ? (
                <ul className="list-disc pl-5">
                    {record.packages.map((pkg, index) => (
                        <li key={index}>{pkg.itemName}</li>
                    ))}
                </ul>
            ) : null,
    },
    { accessor: 'packagePrice', title: 'Price', sortable: true },
    { accessor: 'validUntil', title: 'Valid Until', sortable: true },
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
