import React from "react";

import './style/createPost.css'

const CreatePost = ({ handleChange, setTitle, setContent, disabled, handleClick, title, content }) => {
  return (
    <div className="create">
      <div className="input">
        <h4>What’s on your mind?</h4>
        <label className="main-label" htmlFor="title">Title:
          <input
            className="form-control main-input"
            type="text"
            placeholder="Hello world"
            name="title"
            onChange={(e) => handleChange(setTitle, e)} value={title}></input>
        </label>
          <label className="main-label" htmlFor="content">Content:
            <textarea
              name="content"
              className="form-control main-input textarea"
              placeholder="Content here"
              onChange={(e) => handleChange(setContent, e)} value={content}></textarea>
          </label>
      </div>
      <button className="main-button-create" type="button" disabled={disabled} onClick={handleClick}>Create</button>
    </div>
  )
}

export default CreatePost;