'use client';

import { useMutation } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { useRouter } from 'next/navigation';
import useGetClient from '@/hooks/client/useGetClient';
import { updateClient } from '@/api/services/client.api';
import { toast } from '@/hooks/mastefile/components/ReusableToast';

const useUpdateClient = () => {
    const { refetchClient } = useGetClient();
    const router = useRouter();

    const {
        mutate,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: updateClient,
        onSuccess: (res) => {
            const data = res as BaseResponseType<boolean>;
            if (data.isSuccess) {
                toast.fire({
                    icon: 'success',
                    title: 'Client Successfully Registered.',
                    padding: '10px 20px',
                });
                refetchClient();
                router.push(`/patient-registration/test-selection?clientId=${data.response}`);
            }
        },
        onError: (err) => {
            toast.fire({
                icon: 'error',
                title: `${err.message}`,
                padding: '10px 20px',
            });
        },
    });

    return { mutate, isLoading, isSuccess };
};

export default useUpdateClient;
