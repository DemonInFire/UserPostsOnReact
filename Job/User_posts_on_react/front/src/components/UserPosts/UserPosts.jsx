import React, {useContext} from 'react'
import { PostsContext } from '../../context/postsContext'
import Post from './../Post/Post'
import style from './UserPosts.module.css'

const UserPosts = () => {
    const { posts } = useContext(PostsContext)
    return posts.length ? (
        <div className={style.Container}>
                {
                    posts.map (post => {
                        return (<Post post={post} key={post.id}/>)
                    })
                }
        </div>
    ) : (
        <div>
            There are no posts left
        </div>
    )
}

export default UserPosts