'use client';
import { DataTable, DataTableSortStatus, DataTableColumn } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';

interface CustomDataTableProps<T extends { id: number | string }> {
    data: T[];
    columns: DataTableColumn<T>[];
    pageSizes?: number[];
    rtl?: boolean;
    searchFields?: (keyof T)[];
    minHeight: number;
    height: number;
    title?: string;
}

const CustomDataTable = <T extends { id: number | string }>({
    data,
    columns,
    pageSizes = [10, 20, 30, 50, 100],
    rtl = false,
    searchFields = ['id'] as (keyof T)[],
    minHeight,
    height,
    title,
}: CustomDataTableProps<T>) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(pageSizes[0]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const [recordsData, setRecordsData] = useState<T[]>([]);

    // 🔹 recompute filtered + sorted data whenever data/search/sort changes
    useEffect(() => {
        let filtered = data;

        // search
        if (search) {
            filtered = filtered.filter((item) => searchFields.some((field) => String(item[field]).toLowerCase().includes(search.toLowerCase())));
        }

        // sort
        const sorted = sortBy(filtered, sortStatus.columnAccessor as keyof T);
        if (sortStatus.direction === 'desc') sorted.reverse();

        // pagination
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData(sorted.slice(from, to));
    }, [data, search, sortStatus, page, pageSize, searchFields]);

    return (
        <div className="panel">
            <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                <h5 className="text-lg font-semibold dark:text-white-light">{title}</h5>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <input
                        type="text"
                        className="form-input w-auto"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />
                </div>
            </div>

            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className={`${rtl ? 'table-hover whitespace-nowrap' : 'table-hover whitespace-nowrap'}`}
                    records={recordsData}
                    columns={columns}
                    totalRecords={data.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={setPage}
                    recordsPerPageOptions={pageSizes}
                    onRecordsPerPageChange={(size) => {
                        setPageSize(size);
                        setPage(1);
                    }}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={minHeight}
                    height={height}
                    paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default CustomDataTable;
