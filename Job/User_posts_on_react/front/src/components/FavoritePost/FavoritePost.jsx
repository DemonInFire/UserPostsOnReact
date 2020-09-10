import React, { useContext } from 'react'
import { FavoritePostsContext } from './../../context/favoritePostsContext'
// import { CurrentPostContext } from '../../context/currentPostContext'
import style from './FavoritePost.module.css'

const FavoritePost = ({post}) => {
    const {removePost} = useContext(FavoritePostsContext)
    // const {postInformation} = useContext(CurrentPostContext)
    return (
        <div className={style.Container} /*onClick={() => postInformation(post.title, post.body)}*/>
            <button className={style.Button} onClick={() =>{removePost(post.id)}}/>
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    )
}

export default FavoritePost