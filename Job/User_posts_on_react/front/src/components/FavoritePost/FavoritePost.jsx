import React, { useContext } from 'react'
import { FavoritePostsContext } from './../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalContext'
import style from './FavoritePost.module.css'

const FavoritePost = ({post}) => {
    const {removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    
    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
        removePost(post.id)
    }

    return (
        <div className={style.Container} onClick={sendInfo}>
            <button className={style.Button} onClick={handleChildClick}/>
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    )
}

export default FavoritePost