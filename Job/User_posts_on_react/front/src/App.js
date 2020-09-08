import React from 'react';
import PostsContextProvider from './context/postsContext';
import UserPosts from './components/UserPosts/UserPosts';
import FavoritePosts from './components/FavoritePosts/FavoritePosts';
import FavoritePostsContextProvider from './context/favoritePostsContext'
import CurrentPostContextProvider from './context/currentPostContext';
import CurrentPost from './components/CurrentPost/CurrentPost'
import style from './App.module.css'

function App() {
  return (
    <div className={style.Main}>
      <CurrentPostContextProvider>
        <FavoritePostsContextProvider>
          <PostsContextProvider>
            <div className={style.Posts}>
            <UserPosts />
            <CurrentPost />
            </div>
            <div className={style.Favorite}>
            <FavoritePosts />
            </div>
          </PostsContextProvider>
        </FavoritePostsContextProvider>
      </CurrentPostContextProvider>
    </div>
  );
}

export default App;
