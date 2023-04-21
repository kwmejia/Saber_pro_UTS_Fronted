import Swal from 'sweetalert2';

export const showAlertSuccessToast = (msg = 'Acción realizada con éxito') => {
  return Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: msg,
    toast: true,
    showConfirmButton: false,
    timer: 1500
  })
}


export const showAlertSuccess = (msg = 'Acción realizada con éxito') => {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}