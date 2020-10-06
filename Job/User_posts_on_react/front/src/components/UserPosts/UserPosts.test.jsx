import React from 'react'
import UserPosts from './UserPosts'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from '../../context/favoritePostsContext'
import CurrentPostContextProvider from '../../context/currentPostContext';
import ModalContextProvider from '../../context/modalPostInfoContext'
import ModalAddPostContextProvider from './../../context/modalAddInfoContext'
import { Provider } from 'react-redux'
import store from '../../store/reduxStore'
import PostsContextProvider from '../../context/postsContext';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

describe('Post component', () => {
    const props = {
        post:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
        index:'3',
        id:'3',
        isAddPostModalOpen:true,
        isModalOpen:true
    }

    it('Render Post', () => {
        render(
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <ModalAddPostContextProvider>
                        <PostsContextProvider>
                            <ModalContextProvider>
                                <CurrentPostContextProvider>
                                    <FavoritePostsContextProvider>
                                        <UserPosts {...props}/>
                                    </FavoritePostsContextProvider>
                                </CurrentPostContextProvider>
                            </ModalContextProvider>
                        </PostsContextProvider>
                    </ModalAddPostContextProvider>
                </DndProvider>
            </Provider>
        )
    })
    
    it('Check elements in Post Component', () => {
        const rerender = render(
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <ModalAddPostContextProvider>
                        <PostsContextProvider>
                            <ModalContextProvider>
                                <CurrentPostContextProvider>
                                    <FavoritePostsContextProvider>
                                        <UserPosts {...props}/>
                                    </FavoritePostsContextProvider>
                                </CurrentPostContextProvider>
                            </ModalContextProvider>
                        </PostsContextProvider>
                    </ModalAddPostContextProvider>
                </DndProvider>
            </Provider>
        )

        expect(rerender.queryByRole('modal_title')).not.toBeInTheDocument()
        expect(rerender.queryByRole('modal_content')).not.toBeInTheDocument()
        expect(rerender.getByRole('container')).toBeInTheDocument()
        expect(rerender.queryByRole('modal_container')).not.toBeInTheDocument()
    })
})