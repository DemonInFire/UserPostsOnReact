import React, { createContext, useState } from 'react'

export const FavoritePostsContext = createContext()

const FavoritePostsContextProvider = (props) => {
    const [favoritePosts, setFavoritePosts] = useState([])

    const addPost = (title, body, id) => {
        setFavoritePosts([...favoritePosts, { title, body, id }])
    }

    const removePost = (id) => {
        setFavoritePosts(favoritePosts.filter(post => post.id !== id))
    }
    return (
        <FavoritePostsContext.Provider value={{ favoritePosts, addPost, removePost }}>
            {props.children}
        </FavoritePostsContext.Provider>
    )
}

export default FavoritePostsContextProvider