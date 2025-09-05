// hooks/useSaveLaboratoryTest.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createLaboratoryTest } from '@/api/services/laboratorytest.api';
import { BaseResponseType } from '@/types/BaseResponse';
import { AxiosError } from 'axios';
import { toast } from '@/hooks/mastefile/components/ReusableToast';
import { CreateLaboratoryTestDto } from '@/types/DTO/LaboratoryTest.dto';

const useSaveLaboratoryTest = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (payload: CreateLaboratoryTestDto) => createLaboratoryTest(payload),
        onSuccess: (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                queryClient.invalidateQueries({ queryKey: ['laboratoryTest'] });
                toast.fire({
                    icon: 'success',
                    title: 'Lab. Test Successfully Saved.',
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

export default useSaveLaboratoryTest;
