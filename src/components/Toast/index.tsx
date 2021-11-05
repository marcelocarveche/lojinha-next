import React from 'react'

interface ToastProps {
  msg: any;
  handleShow: any;
  bgColor: string

}

const Toast: React.FC<ToastProps> = ({
  msg,
  handleShow,
  bgColor,
}) => {
  return (
    <div
      className={`toast show`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={`toast-header ${bgColor}`}>
        {/* <img src="..." className="mr-2 rounded" alt="..."> */}
        <strong className="mr-auto">msg.title</strong>
        {/* <small>11 mins ago</small> */}
        <button
          type="button"
          className="mb-1 ml-2 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={handleShow}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">msg.msg</div>
    </div>
  )
}

export default Toast
