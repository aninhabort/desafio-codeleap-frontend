import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import ReactTimeAgo from "react-time-ago";
import DeleteAlert from "../components/DeleteAlert";

const MainScreen = ({ username, handleChange }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [posts, setPosts] = useState([])
  const [buttons, setButtons] = useState(false)
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [id, setId] = useState(0)

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

    if (!disabled) {
      const reactTimeAgo = (<ReactTimeAgo date={new Date()} locale="en-US" />)
      const postPage = <Post key={id} posts={post} time={reactTimeAgo} buttons={buttons} handleClick={showDeleteModal} />
      setId(id+1)
      setPosts(oldPost => [postPage, ...oldPost])
    }
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = (username, id) => {
    const filterPost = posts.filter((post) => post.id !== id)
    console.log(filterPost);
    setDisplayConfirmationModal(false)
  }

  return (
    <div>
      <h4>CodeLeap Network</h4>
      <CreatePost
        handleChange={handleChange}
        setTitle={setTitle}
        setContent={setContent}
        disabled={disabled}
        handleClick={handleClick}
      />
      {posts}
      <DeleteAlert show={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} username={username} />
    </div>
  )
}

export default MainScreen;