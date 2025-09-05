import { useMutation } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { UpdatePackageDto } from '@/types/DTO/LaboratoryPackage.dto';
import { updatePackage } from '@/api/services/laboratorypackage.api';
import { toast } from '@/hooks/user/useSignIn';
import useGetLaboratoryPackage from '@/hooks/mastefile/package/useGetLaboratoryPackage';

const useEditPackage = () => {
    const { refetchData } = useGetLaboratoryPackage();

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: updatePackage,
        onSuccess: (res) => {
            const data = res as BaseResponseType<boolean>;
            if (data.isSuccess) {
                toast.fire({
                    icon: 'success',
                    title: 'Package has been Updated.',
                    padding: '10px 20px',
                });
                refetchData();
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

export default useEditPackage;
