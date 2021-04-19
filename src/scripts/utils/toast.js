import Swal from 'sweetalert2';
import CONFIG from '../global/CONFIG';

const Toast = Swal.mixin({
  toast: true,
  position: innerWidth < CONFIG.BREAKPOINTS.sm
    ? 'bottom-start' : 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export default Toast;
