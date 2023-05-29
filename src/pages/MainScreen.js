import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

const MainScreen = ({username, handleChange}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const notEmpty = () => {
      if (title.length > 0 && content.length > 0) {
        setDisabled(false)
      }
    }
    notEmpty()
  })

  const handleClick = () => {
    const post = {title, content, username}
    if (disabled === false) {
      setPosts(oldPost => [<Post posts={post} />, ...oldPost])
    }
  }

  return (
    <div>
      <h4>CodeLeap Network</h4>
      <CreatePost handleChange={handleChange} setTitle={setTitle} setContent={setContent} disabled={disabled} handleClick={handleClick} />
      {posts}
    </div>
  )
}

export default MainScreen;