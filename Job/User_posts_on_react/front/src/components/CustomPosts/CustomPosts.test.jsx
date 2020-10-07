import React from 'react'
import { render } from '@testing-library/react'
import CustomPosts from './CustomPosts'
import ModalContextProvider from './../../context/modalPostInfoContext'
import ModalAddPostContextProvider from './../../context/modalAddInfoContext'
import CurrentPostContextProvider from './../../context/currentPostContext'
import { Provider } from 'react-redux'
import store from './../../store/reduxStore'
import * as firebase from "firebase";

describe('CustomPosts component', () => {
    const props = {
        state:{
            title:'Post title',
            body:'Post content',
            id:'3'
        },
        isModalOpen:true,
        id:'3',
        key:'3'
    }

    const firebaseConfig = {
        apiKey: "AIzaSyCav6qrK-EnoI8wJ5EFXLE0XKTmGwc-Neo",
        authDomain: "new-user-posts.firebaseapp.com",
        databaseURL: "https://new-user-posts.firebaseio.com",
        projectId: "new-user-posts",
        storageBucket: "new-user-posts.appspot.com",
        messagingSenderId: "565288435823",
        appId: "1:565288435823:web:3dc82bf76bfde75a5acd9a"
    }
      
    firebase.initializeApp(firebaseConfig)

    it('Render Custom Posts', () => {
        render(
            <Provider store={store}>
                <ModalContextProvider>
                    <CurrentPostContextProvider>
                        <ModalAddPostContextProvider>
                            <CustomPosts {...props}/>
                        </ModalAddPostContextProvider>
                    </CurrentPostContextProvider>
                </ModalContextProvider>
            </Provider >
        )
    })

    it('Check elements in Custom Posts', () => {
        const rerender = render(
            <Provider store={store}>
                <ModalContextProvider>
                    <CurrentPostContextProvider>
                        <ModalAddPostContextProvider>
                            <CustomPosts {...props}/>
                        </ModalAddPostContextProvider>
                    </CurrentPostContextProvider>
                </ModalContextProvider>
            </Provider >
        )
    
        expect(rerender.getByRole('posts_container')).toBeInTheDocument()
        expect(rerender.queryByRole('no_posts')).not.toBeInTheDocument()
        expect(rerender.queryByRole('modal_container')).not.toBeInTheDocument()
        expect(rerender.queryByRole('close_button')).not.toBeInTheDocument()
    })

})