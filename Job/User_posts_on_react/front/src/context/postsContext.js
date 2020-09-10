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

    return (
        <PostsContext.Provider value={{ posts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider