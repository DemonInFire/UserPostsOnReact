import React, { useContext } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { PostsContext } from '../../context/postsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import style from './Post.module.css'

const Post = ({post}) => {
    const {addPost} = useContext(FavoritePostsContext)
    const {removePost} = useContext(PostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    return (
        <div className={style.Container} onClick={() => postInformation(post.title, post.body)}>
            <input type="checkbox" title="add to favorite" className={style.Button} onClick={() =>{
                addPost(post.title, post.body, post.id)
                removePost(post.id)}}/>
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    )
}

export default Post