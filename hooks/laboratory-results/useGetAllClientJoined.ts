import { getAllLabResultsJoineWithClient } from '@/api/services/laboratoryresult.api';
import { getAllTransactions } from '@/api/services/transaction.api';
import { useQuery } from '@tanstack/react-query';

const useGetAllClientJoined = () => {
    const { refetch, data, isPending } = useQuery({
        queryKey: ['labresultsclient'],
        queryFn: async () => {
            const response = await getAllLabResultsJoineWithClient();
            return response;
        },
    });

    return {
        isPending,
        refetchClient: refetch,
        labresults: data?.response ? data.response : [],
    };
};

export default useGetAllClientJoined;
