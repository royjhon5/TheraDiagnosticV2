import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { createDiscount } from '@/api/services/discount.api';
import { toast } from '@/hooks/user/useSignIn';

const useCreateDiscount = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: createDiscount,
        onSuccess: (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                queryClient.invalidateQueries({ queryKey: ['discount'] });
                toast.fire({
                    icon: 'success',
                    title: 'Discount Successfully Saved.',
                    padding: '10px 20px',
                });
            }
        },
        onError: (err: AxiosError) => {
            toast.fire({
                icon: 'error',
                title: `${err.message}`,
                padding: '10px 20px',
            });
        },
    });

    return { mutate, isPending, isSuccess };
};

export default useCreateDiscount;
