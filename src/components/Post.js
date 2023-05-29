import React from "react";

const Post = ({ posts, time, buttons }) => {
  return (
    <div>
      <h2>{posts.title}</h2>
      <button hidden={buttons} type="button">edit</button>
      <button hidden={buttons} type="button">remove</button>
      <p>@{posts.username}</p>
      <p>{time}</p>
      <p>{posts.content}</p>
    </div>
  )
}

export default Post;