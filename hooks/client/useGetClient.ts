import { getAllClient } from '@/api/services/client.api';
import { useQuery } from '@tanstack/react-query';

const useGetClient = () => {
    const { refetch, data, isPending } = useQuery({
        queryKey: ['client'],
        queryFn: async () => {
            const response = await getAllClient();
            return response;
        },
    });

    const clientOptions = data?.response.map((prop) => {
        return {
            text: prop.firstName,
            value: prop.id,
        };
    });

    return {
        isPending,
        refetchClient: refetch,
        clients: data?.response ? data.response : [],
        options: clientOptions ? clientOptions : [],
    };
};

export default useGetClient;
