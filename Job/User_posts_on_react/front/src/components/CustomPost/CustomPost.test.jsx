import React from 'react'
import CustomPost from './CustomPost'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from './../../context/favoritePostsContext'
import CurrentPostContextProvider from './../../context/currentPostContext';
import ModalContextProvider from './../../context/modalPostInfoContext'


describe('CustomPost component', () => {
    const props = {
        post:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
        id:'3',
        key:'3'
    }

    it('Render Custom Post', () => {
        render(
            <ModalContextProvider>
                <CurrentPostContextProvider>
                    <FavoritePostsContextProvider>
                        <CustomPost {...props}/>
                    </FavoritePostsContextProvider>
                </CurrentPostContextProvider>
            </ModalContextProvider>
        )
    })

    it('Check elements in Custom Post', () => {
        const rerender = render(
            <ModalContextProvider>
                <CurrentPostContextProvider>
                    <FavoritePostsContextProvider>
                        <CustomPost {...props}/>
                    </FavoritePostsContextProvider>
                </CurrentPostContextProvider>
            </ModalContextProvider>
        )

        expect(rerender.getByRole('title').textContent).toBe('Post title')
        expect(rerender.getByRole('content').textContent).toBe('Post content')
        expect(rerender.getByRole('delete_post')).toBeInTheDocument()
        expect(rerender.getByRole('container')).toBeInTheDocument()
    })
})
