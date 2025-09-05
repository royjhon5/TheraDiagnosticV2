import { deleteTest } from '@/api/services/laboratorytest.api';
import { toast } from '@/hooks/mastefile/components/ReusableToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteTest = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteTestMutation, isPending } = useMutation({
        mutationFn: (id: number) => deleteTest(id),
        onMutate: () => {
            isPending;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['laboratoryTest'] });
        },
        onError: (err) => {
            toast.fire({
                icon: 'error',
                title: `${err.message}`,
                padding: '10px 20px',
            });
        },
    });

    return {
        deleteTest: deleteTestMutation,
        isPending,
    };
};

export default useDeleteTest;
