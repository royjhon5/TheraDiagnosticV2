import { toast } from '@/hooks/mastefile/components/ReusableToast';
import Swal from 'sweetalert2';

export const options = [
    { value: 'HEMATOLOGY', label: 'Hematology' },
    { value: 'IMMUNOLOGY', label: 'Immunology' },
    { value: 'CLINICAL MICROSCOPY', label: 'Clinical Microscopy' },
    { value: 'CHEMISTRY', label: 'Chemistry' },
    { value: 'SEROLOGY', label: 'Serology' },
];

export const showAlert = async (onConfirm: () => void) => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        padding: '2em',
        customClass: { popup: 'sweet-alerts' },
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
            toast.fire({
                icon: 'success',
                title: 'Your data has been deleted.',
                padding: '10px 20px',
            });
        }
    });
};
