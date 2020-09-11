import React, { useContext, useState, useEffect } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalContext'
import style from './Post.module.css'

const Post = ({post}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    const [checked, setChecked] = useState(false);

    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
        setChecked(!checked)
    }

    useEffect(() => {
        checked ? addPost(post.title, post.body, post.id) : removePost(post.id)
    },[checked])
    
    return (
        <div className={style.Container} onClick={sendInfo}>
            <input 
                type="checkbox" 
                title="add to favorite"
                checked={checked} 
                className={style.Button} 
                onClick={handleChildClick}
            />
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>   
    )
}

export default Post