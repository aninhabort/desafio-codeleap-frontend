import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './style/login.css'

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
    <body>
      <div className="login">
        <div>
          <h4 className="login-title">Welcome to CodeLeap network!</h4>
          <label className="login-label" htmlFor="username">Please enter your username
          </label>
          <input
            type="text"
            className="login-input-username"
            name="username"
            onChange={(e) => handleChange(setUsername, e)}
            placeholder="John doe"
          />
        </div>
        <button className="login-button-enter" type="button" onClick={handleClick} disabled={disabled}>ENTER</button>
      </div>
    </body>
  )
}

export default Login;