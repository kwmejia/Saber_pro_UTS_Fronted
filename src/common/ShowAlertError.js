import Swal from 'sweetalert2';

export const showAlertError = () => {
  return Swal.fire({
    position: 'bottom-end',
    icon: 'error',
    title: 'Oops! Ocurrió un error',
    toast: true,
    showConfirmButton: false,
    timer: 1500
  })
}