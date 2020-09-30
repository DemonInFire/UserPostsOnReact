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
import { SortableContainer } from "react-sortable-hoc";

const UserPosts = SortableContainer(({ addInfo }) => {
  const { posts, updatePosts } = useContext(PostsContext);
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

  const createPost = async () => {
    setLoader(true);
    let db = await firebase.database();
    let ref = await db.ref("server/saving-data/user-posts");
    ref.set({ newPostInfo }).then(setSuccess(true));
    setNewPostInfo(initialState);
    setPostValid(validStatus);
  };

  const onClose = () => {
    toggleAddPostModalOpen();
    setLoader(false);
  };
  return (
    <>
      <div className={style.Container}>
        {updatePosts.length !== 0 ? (
          updatePosts
            .sort((a, b) => a.userId - b.userId)
            .map((post, index=post.userId) => (
                <Post
                  post={post}
                  key={post.id}
                  id={post.id}
                  index={index}
                />
            ))
        ) : (
          <div>Find no posts</div>
        )}
      </div>
      {isModalOpen && (
        <Modal>
          <div className={style.ModalContainer}>
            <button className={style.ModalButton} onClick={toggleModal}>
              x
            </button>
            <h2 className={style.ModalTitle}>{state.title}</h2>
            <div className={style.ModalContent}>{state.body}</div>
          </div>
        </Modal>
      )}
      {isAddPostModalOpen && (
        <Modal>
          <div className={style.ModalContainer}>
            <button className={style.ModalButton} onClick={onClose}>
              x
            </button>
            {isLoader ? (
              <div>
                {isSuccess ? (
                  <h1>Data successfully saved!</h1>
                ) : (
                  <div className={style.Loader}></div>
                )}
              </div>
            ) : (
              <div className={style.Content}>
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
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    onClick={createPost}
                    disabled={isPostValid}
                  />
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
});

export { UserPosts };
export default connect(null, { addInfo })(UserPosts);
