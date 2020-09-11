import React, {useContext} from 'react'
import {FavoritePostsContext} from './../../context/favoritePostsContext'
import FavoritePost from './../FavoritePost/FavoritePost'
import { ModalContext } from '../../context/modalContext'
import Modal from '../ModalWindow/Modal'
import { CurrentPostContext } from '../../context/currentPostContext'
import style from './FavoritePosts.module.css'

const FavoritePosts = () => {
    const { favoritePosts } = useContext(FavoritePostsContext)
    const { toggleModal, isModalOpen } = useContext(ModalContext)
    const { state } = useContext(CurrentPostContext)

    return favoritePosts.length ? (
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
        </>
    ) : (
        <div className={style.Container}>
            There are no favorite posts
        </div>
    )
}

export default FavoritePosts