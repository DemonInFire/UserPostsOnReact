import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
