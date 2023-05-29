import React from "react";

const Post = ({postTitle, username, content}) => {
  return (
    <div>
      <h2>{postTitle}</h2>
      <p>{username}</p>
      {/* <p>{time} minutes ago</p> */}
      <p>{content}</p>
    </div>
  )
}

export default Post;