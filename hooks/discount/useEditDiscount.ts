import { useMutation } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { updateDiscount } from '@/api/services/discount.api';
import { toast } from '@/hooks/user/useSignIn';

const useEditDiscount = () => {
    const {
        mutate,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: updateDiscount,
        onSuccess: (res) => {
            const data = res as BaseResponseType<boolean>;
            if (data.isSuccess) {
                toast.fire({
                    icon: 'success',
                    title: 'Discount Successfully Updated.',
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

    return { mutate, isLoading, isSuccess };
};

export default useEditDiscount;
