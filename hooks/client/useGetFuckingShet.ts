import { getAllClient } from '@/api/services/client.api';
import { useQuery } from '@tanstack/react-query';

const useGetFuckingShet = () => {
    const { refetch, data, isPending } = useQuery({
        queryKey: ['useGetFuckingShet'],
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
        fuckingshet: data?.response ? data.response : [],
        options: clientOptions ? clientOptions : [],
    };
};

export default useGetFuckingShet;
