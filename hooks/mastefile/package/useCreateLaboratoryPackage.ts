// hooks/useSaveLaboratoryTest.ts
import { useMutation } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { toast } from '@/hooks/mastefile/components/ReusableToast';
import { getLaboratoryPackageDto } from '@/types/DTO/LaboratoryPackage.dto';
import { createLaboratoryPackage } from '@/api/services/laboratorypackage.api';
import useGetLaboratoryPackage from '@/hooks/mastefile/package/useGetLaboratoryPackage';

const useSaveLaboratoryPackage = () => {
    const { refetchData } = useGetLaboratoryPackage();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (payload: getLaboratoryPackageDto) => createLaboratoryPackage(payload),
        onSuccess: (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                refetchData();
                toast.fire({
                    icon: 'success',
                    title: 'Package has been Saved.',
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

export default useSaveLaboratoryPackage;
