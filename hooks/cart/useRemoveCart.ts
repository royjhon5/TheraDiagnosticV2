import { removeCart } from '@/api/services/cart.api';
import { toast } from '@/hooks/user/useSignIn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveCart = (id?: number) => {
    const queryClient = useQueryClient();

    const { mutate: removeCartMutation, isPending } = useMutation({
        mutationFn: (id: number) => removeCart(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getcart'] });
            toast.fire({
                icon: 'success',
                title: `Test removed.`,
                padding: '10px 20px',
            });
        },
        onError: () => {
            toast.fire({
                icon: 'error',
                title: `Error removing test`,
                padding: '10px 20px',
            });
        },
    });

    return {
        removeCart: removeCartMutation,
        isPending,
    };
};

export default useRemoveCart;
