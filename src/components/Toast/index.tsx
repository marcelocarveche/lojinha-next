import Swal from 'sweetalert2';

export type ToastType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'question'
  | undefined;

const toast = (message: string, type: ToastType) => {
  Swal.fire({
    position: type === 'warning' ? 'center' : 'center',
    toast: false,
    icon: type,
    title: message,
    showConfirmButton: false,
    showCloseButton: false,
    timerProgressBar: true,
    timer: 5000,
    customClass: {
      popup: 'sweetalert-popup',
      container: type === 'warning' ? 'container-warning' : '',
    },
  });
};

export default toast
