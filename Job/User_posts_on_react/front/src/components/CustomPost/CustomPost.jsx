import React, { useContext } from 'react'
import { FavoritePostsContext } from './../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalPostInfoContext'
import style from './CustomPost.module.css'
import * as firebase from "firebase";

const CustomPost = ({post, id}) => {
    const {removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    
    const DeletePost = () => {
        let db = firebase.firestore();
        db.collection(`CustomPosts`).doc(`${id}`).delete()
    };

    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
        DeletePost()
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

export default CustomPost
