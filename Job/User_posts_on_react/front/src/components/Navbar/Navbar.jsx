import React from "react";
import style from "./Navbar.module.css";
import UserPosts from './../UserPosts/UserPosts';
import FavoritePosts from './../FavoritePosts/FavoritePosts';
import {BrowserRouter as Router, NavLink, Switch, Route, Redirect} from 'react-router-dom'

const Navbar = () => {
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
          </ul>
        </nav>
        <Switch>
          <Route path="/favorite">
            <FavoritePosts />
          </Route>
          <Route path="/posts">
            <UserPosts />
          </Route>
          <Redirect strict from="/" to="/posts" />
        </Switch>
    </Router>
  );
};

export default Navbar;
