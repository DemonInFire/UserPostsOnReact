import React, { useContext, useEffect } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalContext'
import { connect } from 'react-redux'
import checkDispatch from './../actionCreator/check'
import style from './Post.module.css'

const Post = ({post, check, checkDispatch}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    let checked = check
    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
    }

    const handleChanges = () => {
        checked = !checked
        checkDispatch(checked)
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
                onChange={handleChanges}
            />
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>   
    )
}

const mapStateToProps = (state) => ({
    check: state.check
})

export default connect(mapStateToProps, {
    checkDispatch
})(Post);