import React, {useContext, useState} from 'react'
import {FavoritePostsContext} from './../../context/favoritePostsContext'
import FavoritePost from './../FavoritePost/FavoritePost'
import { ModalContext } from '../../context/modalPostInfoContext'
import Modal from '../ModalWindow/Modal'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalAddPostContext } from '../../context/modalAddInfoContext'
import style from './FavoritePosts.module.css'
import * as firebase from 'firebase'

const FavoritePosts = () => {
    const { favoritePosts } = useContext(FavoritePostsContext)
    const { toggleModal, isModalOpen } = useContext(ModalContext)
    const { state } = useContext(CurrentPostContext)
    const { isAddPostModalOpen, toggleAddPostModalOpen } = useContext(ModalAddPostContext)

    let initialState = {
        title: '',
        content: '',
    }

    const validStatus = true
    const loaderState = false

    const [newPostInfo, setNewPostInfo] = useState(initialState)
    const [isPostValid, setPostValid] = useState(validStatus)
    const [isLoader, setLoader] = useState(loaderState)

    const changeHandler = (e) => {
        setNewPostInfo({...newPostInfo, [e.target.id]:e.target.value})
        newPostInfo.title.length > 1 && newPostInfo.content.length > 1 ? setPostValid(false) : setPostValid(true)
    }

    const createPost = () => {
        (async () => {
            setLoader(true)
            let db = await firebase.database()
            let ref = await db.ref('server/saving-data/user-posts')
            ref.set({newPostInfo})
            setLoader(false)
        })()
        
        setNewPostInfo(initialState)
        setPostValid(validStatus)
    }

    return (
        <>
            <div className={style.Container}>
                {
                    favoritePosts.map (post => {
                        return (<FavoritePost post={post} key={post.id}/>)
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
                        {isLoader ? (
                            <div className={style.Loader}></div>
                        ) : (
                            <div className={style.Content}>
                                <div>
                                    <div>
                                        <label>Title</label>
                                    </div>
                                <div>
                                    <input 
                                        type="text" 
                                        id="title" 
                                        name="title"
                                        value={newPostInfo.title} 
                                        placeholder="Input post title" 
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Content</label>
                                </div>
                                <div className={style.TextArea}>
                                    <textarea 
                                        id="content" 
                                        name="content" 
                                        placeholder="Input post content"
                                        value={newPostInfo.content} 
                                        rows="6" 
                                        onChange={changeHandler}
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    onClick={createPost}
                                    disabled={isPostValid}
                                />
                            </div>
                        </div>
                        )
                        }
                    </div>
                </Modal>
            }
        </>
    )
}

export default FavoritePosts