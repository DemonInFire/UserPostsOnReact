import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PostsContext = createContext()

const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts')
            setPosts(result.data)
        }
        fetchData()
    }, [])

    const addPost = (title, body, id) => {
        setPosts([...posts, { title, body, id }])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <PostsContext.Provider value={{ posts, removePost, addPost }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider