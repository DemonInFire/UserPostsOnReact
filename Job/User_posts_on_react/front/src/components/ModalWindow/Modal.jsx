import React from 'react'
import style from './Modal.module.css'

const Modal = ({children}) => {

    return (
            <div className={style.Container}>
                <p className={style.Window}>
                    {children}
                </p>
            </div>
    )
}

export default Modal