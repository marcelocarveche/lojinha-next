import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'

import Swal from 'sweetalert2';

export type NotifyType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'question'
  | undefined;

export const Notify = (message: string, type: NotifyType) => {
  Swal.fire({
    position: type === 'warning' ? 'bottom' : 'top-end',
    toast: true,
    icon: type,
    title: message,
    showConfirmButton: false,
    showCloseButton: true,
    timerProgressBar: true,
    timer: 11000,
    customClass: {
      popup: 'sweetalert-popup',
      container: type === 'warning' ? 'container-warning' : '',
    },
  });
};


export default Notify
