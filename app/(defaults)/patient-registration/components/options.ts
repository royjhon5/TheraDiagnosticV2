import { toast } from '@/hooks/mastefile/components/ReusableToast';
import Swal from 'sweetalert2';

export const appointentTypeOptions = [
    { value: 'Walk-In', label: 'Walk-In' },
    { value: 'Company', label: 'Company' },
];

export const civilStatusOptions = [
    { label: 'Single', value: 'Single' },
    { label: 'Married', value: 'Married' },
    { label: 'Widowed', value: 'Widowed' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Separated', value: 'Separated' },
];

export const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Prefer Not To Say', value: 'Prefer Not To Say' },
];

export const patientTypeOptions = [
    { value: 'PWD', label: 'PWD' },
    { value: 'Senior Citizen', label: 'Senior Citizen' },
];

export const transactionTypeOptions = [
    { label: 'For Pickup', value: 'For Pickup' },
    { label: 'To Email', value: 'To Email' },
];

export const PaymentType = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Online Payment', value: 'Online Payment' },
    { label: 'Card', value: 'Card' },
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
