import React from 'react'
import FavoritePosts from './FavoritePosts'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from '../../context/favoritePostsContext'
import CurrentPostContextProvider from '../../context/currentPostContext';
import ModalContextProvider from '../../context/modalPostInfoContext'
import ModalAddPostContextProvider from './../../context/modalAddInfoContext'
import { Provider } from 'react-redux'
import store from '../../store/reduxStore'

describe('FavoritePosts component', () => {
    const props = {
        state:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
        isModalOpen:true,
        isAddPostModalOpen:true,
    }

    it('Render Favorite Post', () => {
        render(
            <Provider store={store}>
                <ModalAddPostContextProvider>
                    <ModalContextProvider>
                        <CurrentPostContextProvider>
                            <FavoritePostsContextProvider>
                                <FavoritePosts {...props}/>
                            </FavoritePostsContextProvider>
                        </CurrentPostContextProvider>
                    </ModalContextProvider>
                </ModalAddPostContextProvider>
            </Provider>
        )
    })

    it('Check elements in Favorite Posts', () => {
        const rerender = render(
            <Provider store={store}>
                <ModalAddPostContextProvider>
                    <ModalContextProvider>
                        <CurrentPostContextProvider>
                            <FavoritePostsContextProvider>
                                <FavoritePosts {...props}/>
                            </FavoritePostsContextProvider>
                        </CurrentPostContextProvider>
                    </ModalContextProvider>
                </ModalAddPostContextProvider>
            </Provider>
        )

        expect(rerender.queryByRole('title')).not.toBeInTheDocument()
        expect(rerender.queryByRole('content')).not.toBeInTheDocument()
        expect(rerender.getByRole('container')).toBeInTheDocument()
        expect(rerender.queryByRole('modal_container')).not.toBeInTheDocument()
        expect(rerender.queryByRole('save_data')).not.toBeInTheDocument()
    })
})