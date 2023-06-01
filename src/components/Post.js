import React, { useState } from "react";
import removeButton from './img/remove.png'
import editButton from './img/edit.png'
import DeleteAlert from './DeleteAlert'
import EditPost from "./EditPost";
import ReactTimeAgo from "react-time-ago";

import './style/post.css'

const Post = ({ post, buttons, submitDelete, submitEdit, handleChange }) => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false)

  const showDeleteModal = () => {
    setDisplayDeleteModal(true)
  }

  const hideDeleteModal = () => {
    setDisplayDeleteModal(false);
  };

  const showEditModal = () => {
    setDisplayEditModal(true)
  }

  const hideEditModal = () => {
    setDisplayEditModal(false)
  }

  return (
    <div className="post">
      <div className="post-header width">
        <h4>{post.title}</h4>
        <div>
          <button className="post-button" hidden={buttons} type="button" onClick={showDeleteModal}>
            <img className="img-remove" src={removeButton} alt="remove" />
          </button>
          <button className="post-button" hidden={buttons} type="button" onClick={showEditModal}>
            <img className="img" src={editButton} alt="edit" />
          </button>
        </div>
      </div>
      <div className="content width">
        <div className="username-and-time">
          <p className="username">@{post.username}</p>
          <p className="time"><ReactTimeAgo
<<<<<<< HEAD
      date={post.createdAt} locale="en-US" /></p>
=======
      date={post.created_datetime} locale="en-US" /></p>
>>>>>>> 20b42a22173723010a3724307f8758e9d94d6748
        </div>
        <p className="content-post">{post.content}</p>
      </div>
      <DeleteAlert show={displayDeleteModal} confirmModal={() => submitDelete(post.id)} hideModal={hideDeleteModal} />
      <EditPost show={displayEditModal} hideModal={hideEditModal} submitEdit={submitEdit} username={post.username} id={post.id} handleChange={handleChange} />
    </div>
  )
}

export default Post;