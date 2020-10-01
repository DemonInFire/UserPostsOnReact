import React, {
    createContext,
    useState,
    useEffect
} from 'react'
import axios from 'axios'

export const PostsContext = createContext()

const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [updatePosts, setUpdatePosts] = useState([])
    const [info, setInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts')
            setPosts(result.data)
            setUpdatePosts(result.data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        setUpdatePosts(posts)
    }, [posts])

    const searchInfo = (info) => {
        if (info.length > 3) {
            let find = posts.filter(post => post.title.includes(`${info}`) === true)    
            setUpdatePosts(find)
            setInfo(info)
        } else {
            setUpdatePosts(posts)
            setInfo(null)
        }
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return ( <PostsContext.Provider value = {
            {
                posts,
                searchInfo,
                updatePosts,
                setUpdatePosts,
                info,
                removePost
            }
        } > {
            props.children
        } </PostsContext.Provider>
    )
}

export default PostsContextProvider