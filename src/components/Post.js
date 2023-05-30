import React from "react";
import removeButton from './img/remove.png'
import editButton from './img/edit.png'

import './style/post.css'

const Post = ({ posts, time, buttons, handleClick }) => {
  return (
    <div className="post">
      <div className="post-header width">
        <h4>{posts.title}</h4>
        <div>
          <button className="post-button" hidden={buttons} type="button" onClick={handleClick}>
            <img className="img-remove" src={removeButton} alt="remove" />
          </button>
          <button className="post-button" hidden={buttons} type="button">
            <img className="img" src={editButton} alt="edit" />
          </button>
        </div>
      </div>
      <div className="content width">
        <div className="username-and-time">
          <p className="username">@{posts.username}</p>
          <p className="time">{time}</p>
        </div>
        <p className="content-post">{posts.content}</p>
      </div>
    </div>
  )
}

export default Post;