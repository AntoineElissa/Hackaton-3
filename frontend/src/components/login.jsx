import "./General/styles/login.scss"
import LogoGoogle from "../assets/images/logoGoogle.png"
import appleLogo from "../assets/images/apple.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  // State
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  // HandleChange functions

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  // HandleSubmit function
  const loginSubmit = () => {
    const userData = { userName, password }
    axios
      .get("http://localhost:4242/", userData)
      .then((response) => {
        if (response.data !== undefined && response.data !== null) {
          navigate("/home")
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="loginGlobal">
      <div>
        <h1 className="username">Username</h1>
        <input
          className="username"
          type="text"
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        <h2>Password</h2>
        <input
          className="password"
          type="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        {/* <NavLink to="/home" exact activeClassName="active"> */}
        <button className="logButton" onClick={loginSubmit}>
          Log In
        </button>
        {/* </NavLink> */}
      </div>
      <div className="or">
        <hr />
        <h1>OR</h1>
        <hr />
      </div>

      <div className="tpButtons">
        <button className="google">
          <img src={LogoGoogle} alt="" />
          Log in with Google
        </button>
        <button className="apple">
          {" "}
          <img src={appleLogo} alt="" />
          Sign in with Apple
        </button>
      </div>
      <hr className="sepaToForgot" />
      <div className="forgot">
        <button className="forgotButton"> Forgot Password ?</button>
        <button className="signIn">Sign In</button>
      </div>
    </div>
  )
}

export default Login
