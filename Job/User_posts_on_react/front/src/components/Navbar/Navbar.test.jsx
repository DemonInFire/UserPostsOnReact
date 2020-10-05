import React from 'react'
import Navbar from './Navbar'
import { render } from '@testing-library/react'
import PostsContextProvider from '../../context/postsContext'
import FavoritePostsContextProvider from './../../context/favoritePostsContext'
import ModalAddPostContextProvider from './../../context/modalAddInfoContext'
import ModalContextProvider from './../../context/modalPostInfoContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import store from './../../store/reduxStore'
import {BrowserRouter as Router} from 'react-router-dom'
import CurrentPostContextProvider from '../../context/currentPostContext'

describe('Navbar component', () => {

    it('Render Navbar', () => {
        render(
            <Router>
                <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                        <CurrentPostContextProvider>
                            <FavoritePostsContextProvider>
                                <PostsContextProvider>
                                    <ModalContextProvider>
                                        <ModalAddPostContextProvider>
                                            <Navbar />
                                        </ModalAddPostContextProvider>
                                    </ModalContextProvider>
                                </PostsContextProvider>
                            </FavoritePostsContextProvider>
                        </CurrentPostContextProvider>
                    </DndProvider>
                </Provider>
            </Router>
        )
    })

    it('Check elements in Navbar', () => {
        const rerender = render(
            <Router>
                <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                        <CurrentPostContextProvider>
                            <FavoritePostsContextProvider>
                                <PostsContextProvider>
                                    <ModalContextProvider>
                                        <ModalAddPostContextProvider>
                                            <Navbar />
                                        </ModalAddPostContextProvider>
                                    </ModalContextProvider>
                                </PostsContextProvider>
                            </FavoritePostsContextProvider>
                        </CurrentPostContextProvider>
                    </DndProvider>
                </Provider>
            </Router>
        )

        expect(rerender.getByRole('search')).toBeInTheDocument()
        expect(rerender.getByRole('add_post')).toBeInTheDocument()
    })
})