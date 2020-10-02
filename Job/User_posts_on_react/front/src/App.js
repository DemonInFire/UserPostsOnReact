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
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <Provider store={store}>
      <div className={style.Main}>
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </div>
    </Provider>
  );
}

export default App;
