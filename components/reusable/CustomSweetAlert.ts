// utils/alert.ts
import Swal from 'sweetalert2';

export const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-secondary',
        cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
        popup: 'sweet-alerts',
    },
    buttonsStyling: false,
});

type AlertOptions = {
    title?: string;
    text?: string;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};

export const confirmAlert = (options: AlertOptions) => {
    swalWithBootstrapButtons
        .fire({
            title: options.title || 'Are you sure?',
            text: options.text || "You won't be able to revert this!",
            icon: options.icon || 'warning',
            showCancelButton: true,
            confirmButtonText: options.confirmButtonText || 'Yes',
            cancelButtonText: options.cancelButtonText || 'Cancel',
            reverseButtons: true,
            padding: '2em',
        })
        .then((result) => {
            if (result.isConfirmed && options.onConfirm) {
                options.onConfirm();
            } else if (result.dismiss === Swal.DismissReason.cancel && options.onCancel) {
                options.onCancel();
            }
        });
};
