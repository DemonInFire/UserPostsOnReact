import React, { useContext } from 'react'
import { FavoritePostsContext } from './../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalPostInfoContext'
import { connect } from 'react-redux'
import changeInfo from './../../actionCreator/changeInfo'
import style from './FavoritePost.module.css'

const FavoritePost = ({post, changeInfo}) => {
    const {removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    
    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
        changeInfo(false, post.id)
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

export {FavoritePost}
export default connect(null, {
    changeInfo
})(FavoritePost);