import { deleteDiscount } from '@/api/services/discount.api';
import { toast } from '@/hooks/user/useSignIn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteDiscount = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteDiscountMutation, isPending } = useMutation({
        mutationFn: (id: number) => deleteDiscount(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['discount'] });
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
        deleteDiscount: deleteDiscountMutation,
        isPending,
    };
};

export default useDeleteDiscount;
