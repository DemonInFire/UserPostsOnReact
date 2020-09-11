import React, { createContext, useState } from 'react'

export const CheckboxContext = createContext()

const CheckboxContextProvider = (props) => {
    const [favoritePosts, setFavoritePosts] = useState([])

    const addPost = (title, body, id) => {
        setFavoritePosts([...favoritePosts, { title, body, id }])
    }

    const removePost = (id) => {
        setFavoritePosts(favoritePosts.filter(post => post.id !== id))
    }

    return (
        <CheckboxContext.Provider value={{ favoritePosts, addPost, removePost }}>
            {props.children}
        </CheckboxContext.Provider>
    )
}

export default CheckboxContextProvider