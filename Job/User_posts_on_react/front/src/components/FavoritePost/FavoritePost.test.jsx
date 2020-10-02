import React from 'react'
import FavoritePost from './FavoritePost'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from './../../context/favoritePostsContext'
import CurrentPostContextProvider from './../../context/currentPostContext';
import ModalContextProvider from './../../context/modalPostInfoContext'
import changeInfo from './../../actionCreator/changeInfo'
import { Provider } from 'react-redux'
import store from './../../store/reduxStore'

describe('FavoritePost component', () => {
    const props = {
        post:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
        changeInfo
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
            </Provider>)
    })
})