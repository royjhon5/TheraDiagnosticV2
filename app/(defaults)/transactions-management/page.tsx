'use client';
import { transactionsColumnHeader } from '@/app/(defaults)/transactions-management/components/columns';
import CustomDataTable from '@/components/datatables/custom-datatables';
import useGetTransactions from '@/hooks/transactions/useGetTransactions';
import { GetTransactionsDTO } from '@/types/DTO/Transaction.dto';
import Link from 'next/link';
export default function TransactionsManagement() {
    const { transactions } = useGetTransactions();
    const data: GetTransactionsDTO[] = transactions ?? [];
    const handleEdit = (record: GetTransactionsDTO) => {
        console.log(record);
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
                    <span>Transactions Management</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-5">
                <div className="col-span-3">
                    <CustomDataTable<GetTransactionsDTO>
                        data={data}
                        columns={transactionsColumnHeader(handleEdit)}
                        searchFields={['id', 'firstName', 'lastName']}
                        minHeight={200}
                        height={550}
                        title="Transactions Management"
                    />
                </div>
            </div>
        </div>
    );
}
