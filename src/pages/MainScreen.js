import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { v4 as uuidv4 } from 'uuid';

import './style/mainScreen.css'

const MainScreen = ({ username, handleChange }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [posts, setPosts] = useState([])
  const [buttons, setButtons] = useState(false)

  useEffect(() => {
    const notEmpty = () => {
      if (title.length > 0 && content.length > 0) {
        setDisabled(false)
      }
    }
    notEmpty()

    const verifyUsername = () => {
      if (username === posts.username) {
        setButtons(true)
      }
    }
    verifyUsername()
  })

  const handleClick = () => {
    const id = uuidv4()
    const post = { title, content, username, id, createdAt: new Date()
     }
    setPosts(oldPost => [post, ...oldPost])

    setTitle('')
    setContent('')
    setDisabled(true)
  }

  const submitDelete = (id) => {
    const newPosts = posts.filter((item) => item.id !== id)
    setPosts(newPosts)
  }

  const submitEdit = (newTitle, newContent, username, id) => {
    if (newTitle && newContent) {
      const postIndex = posts.findIndex(post => post.id === id);
      if (postIndex !== -1) {
        const updatedPost = {
          id,
          title:newTitle,
          username,
          content:newContent,
<<<<<<< HEAD
          createdAt: new Date()
=======
          created_datetime: new Date()
>>>>>>> 20b42a22173723010a3724307f8758e9d94d6748
        };
  
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = updatedPost;
        setPosts(updatedPosts);
      }
    }
  };

  return (
    <header>
      <div className="main-top">
        <h4>CodeLeap Network</h4>
      </div>
      <CreatePost
        handleChange={handleChange}
        setTitle={setTitle}
        setContent={setContent}
        disabled={disabled}
        handleClick={handleClick}
        title={title}
        content={content}
      />
      {posts?.map((item) =>
        <Post
          key={item.id}
          post={item}
          buttons={buttons}
          setPosts={setPosts}
          submitDelete={submitDelete}
          submitEdit={submitEdit}
          handleChange={handleChange}
        />
      )}
    </header>
  )
}

export default MainScreen;