import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PostsContext = createContext()

const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [updatePosts, setUpdatePosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts')
            setPosts(result.data)
            setUpdatePosts(result.data)
        }
        fetchData()
    }, [])

    const searchInfo = (info) => {
        if (info.length > 3){
        let find = posts.filter(post => post.title.includes(`${info}`) === true)
        setUpdatePosts(find)} else {
            setUpdatePosts(posts)
        }
    }

    return (
        <PostsContext.Provider value={{ posts, searchInfo, updatePosts, setUpdatePosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider