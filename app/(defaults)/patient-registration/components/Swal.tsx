import Swal from 'sweetalert2';

export const alert = async () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input required fields',
        padding: '2em',
        customClass: { popup: 'sweet-alerts' },
    });
};
