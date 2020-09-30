import React, { useContext } from "react";
import style from "./Navbar.module.css";
import UserPosts from './../UserPosts/UserPosts';
import FavoritePosts from './../FavoritePosts/FavoritePosts';
import {BrowserRouter as Router, NavLink, Switch, Route, Redirect} from 'react-router-dom'
import { ModalAddPostContext } from "../../context/modalAddInfoContext";
import CustomPosts from "../CustomPosts/CustomPosts";
import { PostsContext } from "../../context/postsContext";
import arrayMove from 'array-move'

const Navbar = () => {
  const { toggleAddPostModalOpen } = useContext(ModalAddPostContext)
  const { searchInfo, updatePosts, setUpdatePosts } = useContext(PostsContext)

  const sendInfo = () => {
    toggleAddPostModalOpen()
  }

  const getInfo = (e) => {
    searchInfo(e.target.value) 
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let arr = arrayMove(updatePosts, oldIndex, newIndex)
    for (let i = 0; i < arr.length; i++){
      arr[i].userId = i
    }
    setUpdatePosts(arr)
  }

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
                className={style.NavLink}
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
                className={style.NavLink}
                onClick={sendInfo}
              >
                Add Post
              </button>
            </li>
            <li className={style.Input}>
              <input type="text" id="filter" placeholder="Search for..." className={style.Search} onChange={getInfo}/>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/favorite">
            <FavoritePosts />
          </Route>
          <Route path="/posts">
            <UserPosts onSortEnd={onSortEnd} axis='xy' />
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
