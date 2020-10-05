import React from 'react'
import FavoritePost from './FavoritePost'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from './../../context/favoritePostsContext'
import CurrentPostContextProvider from './../../context/currentPostContext';
import ModalContextProvider from './../../context/modalPostInfoContext'
import { Provider } from 'react-redux'
import store from './../../store/reduxStore'

describe('FavoritePost component', () => {
    const props = {
        post:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
    }

    it('Render Favorite Post', () => {
        render(
            <Provider store={store}>
                <ModalContextProvider>
                    <CurrentPostContextProvider>
                        <FavoritePostsContextProvider>
                            <FavoritePost {...props}/>
                        </FavoritePostsContextProvider>
                    </CurrentPostContextProvider>
                </ModalContextProvider>
            </Provider>
        )
    })

    it('Check elements in Favorite Posts', () => {
        const rerender = render(
            <Provider store={store}>
                <ModalContextProvider>
                    <CurrentPostContextProvider>
                        <FavoritePostsContextProvider>
                            <FavoritePost {...props}/>
                        </FavoritePostsContextProvider>
                    </CurrentPostContextProvider>
                </ModalContextProvider>
            </Provider>
        )

        expect(rerender.getByRole('title').textContent).toBe('Post title')
        expect(rerender.getByRole('content').textContent).toBe('Post content')
        expect(rerender.getByRole('delete_post')).toBeInTheDocument()
        expect(rerender.getByRole('container')).toBeInTheDocument()
    })
})