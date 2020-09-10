import React, { useContext, useState, useEffect } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
// import { CurrentPostContext } from '../../context/currentPostContext'
import style from './Post.module.css'

const Post = ({post}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    // const {postInformation} = useContext(CurrentPostContext)
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        checked ? addPost(post.title, post.body, post.id) : removePost(post.id)
    },[checked])

    const handlerOnFavoriteClick = () => {
        setChecked(!checked)
    }
    
    return (
        <div className={style.Container} /*onClick={() => postInformation(post.title, post.body)}*/>
            <input 
                type="checkbox" 
                title="add to favorite"
                checked={checked} 
                className={style.Button} 
                onChange={handlerOnFavoriteClick}
            />
            <h3 className={style.Title}>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    )
}

export default Post