import React from "react";

const Post = ({posts}) => {
  return (
    <div>
      <h2>{posts.title}</h2>
      <p>@{posts.username}</p>
      {/* <p>{time} minutes ago</p> */}
      <p>{posts.content}</p>
    </div>
  )
}

export default Post;