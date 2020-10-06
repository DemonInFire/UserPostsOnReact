import React from 'react'
import Post from './Post'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from '../../context/favoritePostsContext'
import CurrentPostContextProvider from '../../context/currentPostContext';
import ModalContextProvider from '../../context/modalPostInfoContext'
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
        check:false,
    }

    it('Render Post', () => {
        render(
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <PostsContextProvider>
                        <ModalContextProvider>
                            <CurrentPostContextProvider>
                                <FavoritePostsContextProvider>
                                    <Post {...props}/>
                                </FavoritePostsContextProvider>
                            </CurrentPostContextProvider>
                        </ModalContextProvider>
                    </PostsContextProvider>
                </DndProvider>
            </Provider>
        )
    })
    
    it('Check elements in Post Component', () => {
        const rerender = render(
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <PostsContextProvider>
                        <ModalContextProvider>
                            <CurrentPostContextProvider>
                                <FavoritePostsContextProvider>
                                    <Post {...props}/>
                                </FavoritePostsContextProvider>
                            </CurrentPostContextProvider>
                        </ModalContextProvider>
                    </PostsContextProvider>
                </DndProvider>
            </Provider>
        )

        expect(rerender.getByRole('title').textContent).toBe('Post title')
        expect(rerender.getByRole('content').textContent).toBe('Post content')
        expect(rerender.getByRole('add_favorite')).toBeInTheDocument()
        expect(rerender.getByRole('post_container')).toBeInTheDocument()
        expect(rerender.getByRole('watch_posts_content')).toBeInTheDocument()
    })
})