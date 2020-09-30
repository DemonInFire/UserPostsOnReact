import React, { useContext, useEffect, useState } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalPostInfoContext'
import { PostsContext } from "../../context/postsContext";
import { connect } from 'react-redux'
import changeInfo from './../../actionCreator/changeInfo'
import style from './Post.module.css'

const Post = ({post, check, changeInfo, id}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    const {info} = useContext(PostsContext);

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
        checked ? addPost(post.title, post.body, id) : removePost(id)
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
            {info ?
                <h3 className={style.Title}>
                    {post.title.slice(0,post.title.indexOf(info))}
                    <span className={style.FindText}>{info}</span>
                    {post.title.slice(post.title.indexOf(info) + info?.length)} 
                </h3> 
                :
                <h3 className={style.Title}>{ post.title }</h3>  
            }            
            <div>{post.body}</div>
        </div>   
    )
}

const mapStateToProps = (state, ownProps) => {
    return state.filter(obj => obj.id === ownProps.id)[0] ? {check: state.filter(obj => obj.id === ownProps.id)[0].check} : (<div class="loader"></div>)}

export default connect(mapStateToProps, {
    changeInfo
})(Post);
