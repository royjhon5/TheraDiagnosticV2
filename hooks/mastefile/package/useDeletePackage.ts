import { deletePackage } from '@/api/services/laboratorypackage.api';
import useGetLaboratoryPackage from '@/hooks/mastefile/package/useGetLaboratoryPackage';
import { toast } from '@/hooks/user/useSignIn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeletePackage = () => {
    const { refetchData } = useGetLaboratoryPackage();

    const { mutate: deleteTestMutation, isPending } = useMutation({
        mutationFn: (id: number) => deletePackage(id),
        onSuccess: () => {
            refetchData();
            toast.fire({
                icon: 'success',
                title: 'Package has been deleted.',
                padding: '10px 20px',
            });
        },
        onError: () => {
            toast.fire({
                icon: 'error',
                title: 'Something went wrong.',
                padding: '10px 20px',
            });
        },
    });

    return {
        deletePackage: deleteTestMutation,
        isPending,
    };
};

export default useDeletePackage;
