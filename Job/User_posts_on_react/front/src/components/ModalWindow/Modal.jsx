import React from 'react'
import style from './Modal.module.css'

const Modal = ({children}) => {

    return (
            <div className={style.Container}>
                <div className={style.Window}>
                    {children}
                </div>
            </div>
    )
}

export default Modal