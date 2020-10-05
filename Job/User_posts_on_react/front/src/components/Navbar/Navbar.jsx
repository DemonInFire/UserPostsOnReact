import React, { useContext } from "react";
import style from "./Navbar.module.css";
import UserPosts from './../UserPosts/UserPosts';
import FavoritePosts from './../FavoritePosts/FavoritePosts';
import {BrowserRouter as Router, NavLink, Switch, Route, Redirect} from 'react-router-dom'
import { ModalAddPostContext } from "../../context/modalAddInfoContext";
import CustomPosts from "../CustomPosts/CustomPosts";
import { FavoritePostsContext } from './../../context/favoritePostsContext'
import { PostsContext } from "../../context/postsContext";
import { ItemTypes } from './../../utils/posts'
import { useDrop } from 'react-dnd'

const Navbar = () => {
  const { toggleAddPostModalOpen } = useContext(ModalAddPostContext)
  const { searchInfo, removePost } = useContext(PostsContext)
  const { addPost } = useContext(FavoritePostsContext)

  const sendInfo = () => {
    toggleAddPostModalOpen()
  }

  const getInfo = (e) => {
    searchInfo(e.target.value) 
  }

  const handleChanges = (item) => {
    addPost(item.title, item.body, item.id)
    removePost(item.id)
  }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.POST,
    drop: (item, monitor) => handleChanges(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <NavLink
                className={style.NavLink} 
                to="/posts"
                activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }}
              >
                  User Posts
              </NavLink>
            </li>
            <li>
              <NavLink 
                ref={drop}
                className={isOver ? style.NavLinkTarget : style.NavLink}
                to="/favorite"
                activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.NavLink} 
                to="/customPosts"
                activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }}
              >
                  Custom Posts
              </NavLink>
            </li>
            <li>
              <button
                role='add_post' 
                className={style.NavLink}
                onClick={sendInfo}
              >
                Add Post
              </button>
            </li>
            <li className={style.Input}>
              <input 
                type="text" 
                id="filter" 
                placeholder="Search for..." 
                className={style.Search} 
                onChange={getInfo}
                role='search'
              />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/favorite">
            <FavoritePosts />
          </Route>
          <Route path="/posts">
            <UserPosts />
          </Route>
          <Route path="/customPosts">
            <CustomPosts />
          </Route>
          <Redirect strict from="/" to="/posts" />
        </Switch>
    </Router>
  );
};

export default Navbar;
