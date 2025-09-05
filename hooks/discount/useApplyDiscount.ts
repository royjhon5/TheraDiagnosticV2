import { applyDiscount } from '@/api/services/discount.api';
import { toast } from '@/hooks/user/useSignIn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

const useApplyDiscount = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: applyDiscount,
        onSuccess: (res: { message: string }) => {
            toast.fire({
                icon: 'success',
                title: 'Discount Applied.',
                padding: '10px 20px',
            });
            queryClient.invalidateQueries({ queryKey: ['getcart'] });
        },
        onError: (err: AxiosError) => {
            toast.fire({
                icon: 'error',
                title: `${err.message}`,
                padding: '10px 20px',
            });
        },
    });

    const submitDiscount = (clientId: number, discountId: number) => {
        mutate({
            clientId,
            discountId,
            applyDiscount: true,
        });
    };

    return {
        submitDiscount,
        isPending,
        isSuccess,
    };
};

export default useApplyDiscount;
