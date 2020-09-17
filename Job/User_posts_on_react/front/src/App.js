import React from 'react';
import PostsContextProvider from './context/postsContext';
import FavoritePostsContextProvider from './context/favoritePostsContext'
import CurrentPostContextProvider from './context/currentPostContext';
import ModalContextProvider from './context/modalPostInfoContext'
import style from './App.module.css'
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import ModalAddPostContextProvider from './context/modalAddInfoContext'
import store from './store/reduxStore'

function App() {
  return (
    <Provider store={store}>
      <div className={style.Main}>
        <ModalAddPostContextProvider>
          <ModalContextProvider>
            <CurrentPostContextProvider>
              <FavoritePostsContextProvider>
                <PostsContextProvider>
                  <Navbar />
                </PostsContextProvider>
              </FavoritePostsContextProvider>
            </CurrentPostContextProvider>
          </ModalContextProvider>
        </ModalAddPostContextProvider>
      </div>
    </Provider>
  );
}

export default App;
