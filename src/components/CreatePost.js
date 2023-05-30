import React from "react";

const CreatePost = ({ handleChange, setTitle, setContent, disabled, handleClick }) => {
  return (
    <div>
      <h4>What’s on your mind?</h4>
      <label>Title
        <input
          type="text"
          placeholder="Hello world"
          onChange={(e) => handleChange(setTitle, e)}></input>
      </label>
      <label>Content
        <textarea placeholder="Content here" onChange={(e) => handleChange(setContent, e)}></textarea>
      </label>
      <button type="button" disabled={disabled} onClick={handleClick}>Create</button>
    </div>
  )
}

export default CreatePost;