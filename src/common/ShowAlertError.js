import Swal from 'sweetalert2';

export const showAlertErrorToast = (msg = 'Oops! Ocurrió un error') => {
  return Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: msg,
    toast: true,
    showConfirmButton: false,
    timer: 1500
  })
}


export const showAlertError = (msg = 'Oops! Ocurrió un error') => {
  return Swal.fire({
    position: 'center',
    icon: 'error',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}