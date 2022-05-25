import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom"

const Toast = () => {
    return ReactDOM.createPortal(
        <ToastContainer
            position='top-right'
            autoClose={1200}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            limit={5}
            pauseOnFocusLoss
            draggable
          
            pauseOnHover />, document.getElementById("modal")
    )
}

export { Toast }