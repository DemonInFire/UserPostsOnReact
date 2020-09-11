import React from 'react';
import PostsContextProvider from './context/postsContext';
import FavoritePostsContextProvider from './context/favoritePostsContext'
import CurrentPostContextProvider from './context/currentPostContext';
import ModalContextProvider from './context/modalContext'
import style from './App.module.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={style.Main}>
      <ModalContextProvider>
        <CurrentPostContextProvider>
          <FavoritePostsContextProvider>
            <PostsContextProvider>
              <Navbar />
            </PostsContextProvider>
          </FavoritePostsContextProvider>
        </CurrentPostContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
