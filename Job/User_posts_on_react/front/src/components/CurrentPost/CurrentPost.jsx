import React, {useContext} from 'react'
import {CurrentPostContext} from './../../context/currentPostContext'
import { createPortal } from 'react-dom'
import style from './CurrentPost.module.css'

const CurrentPost = () => {
    const { state } = useContext(CurrentPostContext)
    return (
        <div className={style.Container}>
            <h2 className={style.Title}>{state.title}</h2>
            <div className={style.Content}>{state.content}</div>
        </div>
    )
}

export default CurrentPost