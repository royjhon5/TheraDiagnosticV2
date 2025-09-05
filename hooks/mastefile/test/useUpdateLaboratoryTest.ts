import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { updateLabTestDTO } from '@/types/DTO/LaboratoryTest.dto';
import { updateLabTest } from '@/api/services/laboratorytest.api';
import { toast } from '@/hooks/mastefile/components/ReusableToast';

const useUpdateLaboratoryTest = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (data: updateLabTestDTO) => updateLabTest(data),
        onSuccess: (res) => {
            const data = res as BaseResponseType<boolean>;
            if (data.isSuccess) {
                queryClient.invalidateQueries({ queryKey: ['laboratoryTest'] });
                toast.fire({
                    icon: 'success',
                    title: 'Test has been updated.',
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

    const onSubmit = (dto: updateLabTestDTO) => {
        mutate(dto);
    };

    return {
        onSubmit,
        isLoading: isPending,
        isSuccess,
    };
};

export default useUpdateLaboratoryTest;
