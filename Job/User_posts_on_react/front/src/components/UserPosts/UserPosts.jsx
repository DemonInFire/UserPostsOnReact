import React, {useContext, useEffect} from 'react'
import { PostsContext } from '../../context/postsContext'
import Post from './../Post/Post'
import Modal from '../ModalWindow/Modal'
import style from './UserPosts.module.css'
import { ModalContext } from '../../context/modalPostInfoContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { connect } from 'react-redux'
import addInfo from './../../actionCreator/addInfo'
import { ModalAddPostContext } from '../../context/modalAddInfoContext'

const UserPosts = ({addInfo}) => {
    const { posts } = useContext(PostsContext)
    const { toggleModal, isModalOpen } = useContext(ModalContext)
    const { state } = useContext(CurrentPostContext)
    const { isAddPostModalOpen, toggleAddPostModalOpen } = useContext(ModalAddPostContext)
    
    useEffect(() => {
        posts.map(post => addInfo(false, post.id))
    },[posts])

    return posts.length ? (
        <>
            <div className={style.Container}>
                {
                    posts.map (post => {
                        return (<Post post={post} key={post.id} id={post.id}/>)
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
            { isAddPostModalOpen &&
                <Modal>
                    <div className={style.ModalContainer}>
                        <button className={style.ModalButton} onClick={toggleAddPostModalOpen}>x</button>
                        <div className={style.Content}>
                            <div>
                                <div>
                                    <label for="fname">Title</label>
                                </div>
                                <div>
                                    <input type="text" id="fname" name="firstname" placeholder="Input post title" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="fname">Content</label>
                                </div>
                                <div className={style.TextArea}>
                                    <textarea id="subject" name="subject" placeholder="Input post content" rows="6"></textarea>
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
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

export {UserPosts}
export default connect(null,{addInfo})(UserPosts)