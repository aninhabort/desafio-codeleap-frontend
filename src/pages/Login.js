import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ username, setUsername, handleChange }) => {
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const buttonDisabled = () => {
      if (username.length > 0) {
        setDisabled(false)
      }
    }
    buttonDisabled()
  })

  const handleClick = () => {
    navigate('/codeleap-network')
  }

  return (
    <div>
      <h4>Welcome to CodeLeap network!</h4>
      <label htmlFor="username">Please enter your username
        <input
          type="text"
          className="username-login"
          name="username"
          onChange={(e) => handleChange(setUsername, e)}
          placeholder="John doe"
        />
      </label>
      <button type="button" onClick={handleClick} disabled={disabled}>ENTER</button>
    </div>
  )
}

export default Login;