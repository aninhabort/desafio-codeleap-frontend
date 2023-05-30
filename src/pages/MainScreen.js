import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import ReactTimeAgo from "react-time-ago";
import DeleteAlert from "../components/DeleteAlert";

import './style/mainScreen.css'

const MainScreen = ({ username, handleChange }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [posts, setPosts] = useState([])
  const [buttons, setButtons] = useState(false)
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [id, setId] = useState(0)
  const [remove, setRemove] = useState(0)

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

  const showDeleteModal = () => {
    setDisplayConfirmationModal(true)
  }

  const handleClick = () => {
    const post = { title, content, username, id }

    setId(id + 1)
    setPosts(oldPost => [post, ...oldPost])

    setTitle('')
    setContent('')
    setDisabled(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = (num) => {
    const newPosts = posts.filter((item) => item.id !== num)

    setPosts(newPosts)
    setDisplayConfirmationModal(false)
    setRemove(id)
  }

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
      {posts.map((item) =>
        <Post key={item.id} posts={item} time={(<ReactTimeAgo date={new Date()} locale="en-US" />)} buttons={buttons} handleClick={showDeleteModal} />
      )}
      {<DeleteAlert show={displayConfirmationModal} confirmModal={() => submitDelete(remove)} hideModal={hideConfirmationModal} />}
    </header>
  )
}

export default MainScreen;