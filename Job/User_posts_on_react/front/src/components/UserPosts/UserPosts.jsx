import React, {useContext} from 'react'
import { PostsContext } from '../../context/postsContext'
import Post from './../Post/Post'
import Modal from '../ModalWindow/Modal'
import style from './UserPosts.module.css'
import { ModalContext } from '../../context/modalContext'
import { CurrentPostContext } from '../../context/currentPostContext'

const UserPosts = () => {
    const { posts } = useContext(PostsContext)
    const { toggleModal, isModalOpen } = useContext(ModalContext)
    const { state } = useContext(CurrentPostContext)

    return posts.length ? (
        <>
            <div className={style.Container}>
                {
                    posts.map (post => {
                        return (<Post post={post} key={post.id}/>)
                    })
                }
            </div> 
            { isModalOpen &&
                <Modal>
                    <div className={style.ModalContainer}>
                        <button className={style.ModalButton} onClick={toggleModal}>x</button>
                        <h2 className={style.ModalTitle}>{state.title}</h2>
                        <div className={style.ModalContent}>{state.content}</div>
                    </div>
                </Modal>
            }
         </>
    ) : (
        <div>
            There are no posts left
        </div>
    )
}

export default UserPosts