import React, { useContext, useEffect, useState } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalContext'
import { connect } from 'react-redux'
import changeInfo from './../../actionCreator/changeInfo'
import style from './Post.module.css'

const Post = ({post, check, changeInfo, id}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    const [checked, setChecked] = useState(check)

    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
    }

    const handleChanges = () => {
        setChecked(!checked)
        changeInfo(checked, id)
    }



    useEffect(() => {
        checked ? addPost(post.title, post.body, post.id) : removePost(post.id)
    },[checked])
    
    return (
        <div className={style.Container} onClick={sendInfo}>
            <input 
                type="checkbox" 
                title="add to favorite"
                checked={!!checked} 
                className={style.Button} 
                onClick={handleChildClick}
                onChange={handleChanges}
            />
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>   
    )
}

const mapStateToProps = (state, ownProps) => ({
    check: state.filter(status => status.id === ownProps.id).check
})

export default connect(mapStateToProps, {
    changeInfo
})(Post);