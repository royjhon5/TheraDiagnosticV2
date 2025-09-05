import { toast } from '@/hooks/mastefile/components/ReusableToast';
import Swal from 'sweetalert2';

export const options = [
    { value: 'Hematology', label: 'Hematology' },
    { value: 'Immunology', label: 'Immunology' },
    { value: 'Clinical Microscopy', label: 'Clinical Microscopy' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Serology', label: 'Serology' },
    { value: 'Serology HIV', label: 'Serology HIV' },
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
