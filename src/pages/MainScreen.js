import React, { useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

const MainScreen = ({username}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [time, setTime] = useState('')
  
  return (
    <div>
      <h4>CodeLeap Network</h4>
      <CreatePost />
      <Post postTitle={title} content={content} username={username} />
    </div>
  )
}

export default MainScreen;