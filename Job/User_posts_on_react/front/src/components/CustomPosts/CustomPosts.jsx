import React, { useEffect, useState, useContext } from "react";
import * as firebase from "firebase";
import style from "./CustomPosts.module.css";
import { ModalContext } from "../../context/modalPostInfoContext";
import Modal from "./../ModalWindow/Modal";
import { connect } from "react-redux";
import addInfo from "./../../actionCreator/addInfo";
import { ModalAddPostContext } from "../../context/modalAddInfoContext";
import { CurrentPostContext } from "../../context/currentPostContext";
import CustomPost from "./../CustomPost/CustomPost";

const CustomPosts = () => {
  const { toggleModal, isModalOpen } = useContext(ModalContext);
  const { state } = useContext(CurrentPostContext);
  const { isAddPostModalOpen, toggleAddPostModalOpen } = useContext(
    ModalAddPostContext
  );

  let initialState = {
    title: "",
    body: "",
  };

  const validStatus = true;
  const loaderState = false;
  const successState = false;

  const [customPosts, setCustomPosts] = useState([]);
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
    let store = await firebase.firestore();
    let ref = await store.collection("CustomPosts");
    ref.add({ newPostInfo }).then(setSuccess(true));
    setNewPostInfo(initialState);
    setPostValid(validStatus);
  };

  const onClose = () => {
    toggleAddPostModalOpen();
    setLoader(false);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("CustomPosts")
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCustomPosts(newPosts);
      });
  }, []);

  return (
    <>
      <div className={style.Container}>
        {customPosts.map((post) => {
          addInfo(false, post.id);
          return post ? (
            <CustomPost post={post.newPostInfo} key={post.id} id={post.id}/>
          ) : (
            <div>There is no custom posts</div>
          );
        })}
      </div>
      {isModalOpen && (
        <Modal>
          <div className={style.ModalContainer}>
            <button className={style.ModalButton} onClick={toggleModal}>
              x
            </button>
            <h2 className={style.ModalTitle}>{state.title}</h2>
            <div className={style.ModalContent}>{state.content}</div>
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
};

export { CustomPosts };
export default connect(null, { addInfo })(CustomPosts);