const CreatePost = () => {
  return (
    <div>
    <h4>What’s on your mind?</h4>
    <label>Title
      <input type="text" placeholder="Hello world"></input>
    </label>
    <label>Content
      <textarea placeholder="Content here"></textarea>
    </label>
    <button type="button">Create</button>
  </div>
  )
}

export default CreatePost;