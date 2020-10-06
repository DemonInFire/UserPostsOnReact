import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../context/postsContext";
import Post from "./../Post/Post";
import Modal from "../ModalWindow/Modal";
import style from "./UserPosts.module.css";
import { ModalContext } from "../../context/modalPostInfoContext";
import { CurrentPostContext } from "../../context/currentPostContext";
import { connect } from "react-redux";
import addInfo from "./../../actionCreator/addInfo";
import { ModalAddPostContext } from "../../context/modalAddInfoContext";
import * as firebase from "firebase";

const UserPosts = ({ addInfo }) => {
  const { posts, updatePosts, setUpdatePosts } = useContext(PostsContext);
  const { toggleModal, isModalOpen } = useContext(ModalContext);
  const { state } = useContext(CurrentPostContext);
  const { isAddPostModalOpen, toggleAddPostModalOpen } = useContext(
    ModalAddPostContext
  );

  useEffect(() => {
    posts.map((post) => {
      addInfo(false, post.id);
    });
  }, [posts]);

  let initialState = {
    title: "",
    body: "",
  };

  const validStatus = true;
  const loaderState = false;
  const successState = false;

  const [newPostInfo, setNewPostInfo] = useState(initialState);
  const [isPostValid, setPostValid] = useState(validStatus);
  const [isLoader, setLoader] = useState(loaderState);
  const [isSuccess, setSuccess] = useState(successState);

  const changeHandler = (e) => {
    setNewPostInfo({ ...newPostInfo, [e.target.id]: e.target.value });
    newPostInfo.title.length > 1 && newPostInfo.body.length > 1
      ? setPostValid(false)
      : setPostValid(true);
  };

  const onDrop = (item, monitor) => {
    const newPosts = updatePosts
    .filter(post => post.id !== item.id)
    .concat({ ...item });
    setUpdatePosts([ ...newPosts ]);
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const post = updatePosts[dragIndex];
    const newPosts = updatePosts.filter((post, index) => index !== dragIndex);
    newPosts.splice(hoverIndex, 0, post);
    setUpdatePosts([ ...newPosts ]);
  };

  const createPost = () => {
    setLoader(true);
    let store = firebase.firestore();
    let ref = store.collection("CustomPosts");
    ref.add({ newPostInfo }).then(setSuccess(true))
    setNewPostInfo(initialState);
    setPostValid(validStatus);
  };

  const onClose = () => {
    toggleAddPostModalOpen();
    setLoader(false);
  };
  return (
    <>
      <div className={style.Container} onDrop={onDrop} role='container'>
        {updatePosts.length !== 0 ? (
          updatePosts
            .map((post, index) => (
                <Post
                  post={post}
                  key={post.id}
                  id={post.id}
                  index={index}
                  moveItem={moveItem}
                />
            ))
        ) : (
          <div role='no_posts'>Find no posts</div>
        )}
      </div>
      {isModalOpen && (
        <Modal>
          <div className={style.ModalContainer} role='modal_container'>
            <button className={style.ModalButton} onClick={toggleModal} role='close_button'>
              x
            </button>
            <h2 className={style.ModalTitle} role='title'>{state.title}</h2>
            <div className={style.ModalContent} role='content'>{state.body}</div>
          </div>
        </Modal>
      )}
      {isAddPostModalOpen && (
        <Modal>
          <div className={style.ModalContainer} role='modal_container'>
            <button className={style.ModalButton} onClick={onClose} role='close_button'>
              x
            </button>
            {isLoader ? (
              <div>
                {isSuccess ? (
                  <h1 role='data_saved'>Data successfully saved!</h1>
                ) : (
                  <div className={style.Loader} role='loader'></div>
                )}
              </div>
            ) : (
              <div className={style.Content} role='modal_container'>
                <div>
                  <div>
                    <label>Title</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newPostInfo.title}
                      placeholder="Input post title"
                      onChange={changeHandler}
                      required
                      role='modal_title'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Content</label>
                  </div>
                  <div className={style.TextArea}>
                    <textarea
                      id="body"
                      name="content"
                      placeholder="Input post content"
                      value={newPostInfo.body}
                      rows="6"
                      onChange={changeHandler}
                      required
                      role='modal_content'
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    onClick={createPost}
                    disabled={isPostValid}
                    role='submit'
                  />
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export { UserPosts };
export default connect(null, { addInfo })(UserPosts);
