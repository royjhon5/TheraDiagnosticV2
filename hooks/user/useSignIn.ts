'use client';

import { BaseResponseType } from '@/types/BaseResponse';
import { LoginResponseDto } from '@/types/DTO/UserDTO';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { userSignIn } from '@/api/services/user.api';
import Swal from 'sweetalert2';
import { globalLoginSchema } from '@/schema/user';
export const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
});
const useSignIn = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const { mutate, isPending } = useMutation({
        mutationFn: userSignIn,
        onMutate: () => {
            setLoading(true);
        },
        onSuccess: async (res) => {
            const data = res as BaseResponseType<LoginResponseDto>;
            if (data && data.isSuccess) {
                const { firstName, lastName } = data.response;
                Cookies.set('userid', data.response.userId, { expires: 365 });
                Cookies.set('token', data.response.token, { expires: 365 });
                Cookies.set(
                    'user',
                    JSON.stringify({
                        username: `${firstName} ${lastName}`,
                        role: data.response.roles[0],
                        email: data.response.email,
                    }),
                    { expires: 365 },
                );

                toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    padding: '10px 20px',
                });
                router.push('/');
            } else {
                toast.fire({
                    icon: 'error',
                    title: 'Something went wrong.',
                    padding: '10px 20px',
                });
            }
        },
        onError: () => {
            toast.fire({
                icon: 'error',
                title: 'Something went wrong.',
                padding: '10px 20px',
            });
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    const onSubmit = ({ username, password }: globalLoginSchema) => {
        setLoading(true);
        mutate({
            username,
            password,
        });
    };

    return {
        onSubmit,
        isPending,
        loading,
    };
};

export default useSignIn;
