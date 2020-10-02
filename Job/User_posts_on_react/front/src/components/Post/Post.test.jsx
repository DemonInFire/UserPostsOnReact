import React from 'react'
import Post from './Post'
import { render } from '@testing-library/react'
import FavoritePostsContextProvider from '../../context/favoritePostsContext'
import CurrentPostContextProvider from '../../context/currentPostContext';
import ModalContextProvider from '../../context/modalPostInfoContext'
import changeInfo from '../../actionCreator/changeInfo'
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
        changeInfo:changeInfo(),
        check:false
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
})