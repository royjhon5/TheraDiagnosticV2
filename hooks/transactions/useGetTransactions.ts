import { getAllTransactions } from '@/api/services/transaction.api';
import { useQuery } from '@tanstack/react-query';

const useGetTransactions = () => {
    const { refetch, data, isPending } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const response = await getAllTransactions();
            return response;
        },
    });

    return {
        isPending,
        refetchClient: refetch,
        transactions: data?.response ? data.response : [],
    };
};

export default useGetTransactions;
