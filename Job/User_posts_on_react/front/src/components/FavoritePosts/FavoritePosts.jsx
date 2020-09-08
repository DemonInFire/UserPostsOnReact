import React, {useContext} from 'react'
import {FavoritePostsContext} from './../../context/favoritePostsContext'
import FavoritePost from './../FavoritePost/FavoritePost'
import style from './FavoritePosts.module.css'

const FavoritePosts = () => {
    const { favoritePosts } = useContext(FavoritePostsContext)
    return favoritePosts.length ? (
        <div className={style.Container}>
                {
                    favoritePosts.map (post => {
                        return (<FavoritePost post={post} key={post.id}/>)
                    })
                }
        </div>
    ) : (
        <div className={style.Container}>
            There are no favorite posts
        </div>
    )
}

export default FavoritePosts