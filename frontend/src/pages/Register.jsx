import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import "./styles/Register.scss"
function Register() {
  const navigate = useNavigate()
  // States
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [pwd, setPwd] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Onchange functions

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setMail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPwd(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }
  // Requete post

  const handleSubmit = () => {
    const userData = { name, mail, pwd }

    axios
      .post("http://localhost:4242/register", userData)
      .then((response) => {
        // Handle success or do something with the response
        if (response.data !== undefined && response.data !== null) {
          navigate("/login")
        } else {
          // Gérer le cas où l'inscription n'a pas réussi
        }
      })
      .catch((error) => {
        console.error(error)

        // Handle error
      })
  }

  return (
    <div className="register-container">
      <div className="register-title">
        <h2>Sign Up</h2>
      </div>
      <div className="register-form">
        <div className="register-name">
          <h3>Name:</h3>
          <input
            type="text"
            className="register-input"
            onChange={handleNameChange}
          />
        </div>
        <div className="register-email">
          <h3>Email:</h3>
          <input
            type="email"
            className="register-input"
            onChange={handleEmailChange}
          />
        </div>
        <div className="register-password">
          <h3>Password:</h3>
          <input
            type="password"
            className="register-input"
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <h3>Confirm password:</h3>
          <input
            type="password"
            className="register-input"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </div>
        <input
          type="button"
          placeholder="submit"
          className="register-submit"
          value="Sign-Up"
          onClick={handleSubmit}
        />
        <Link to="/login" className="link-register">
          <p className="p-link-register">Already have an account click here!</p>
        </Link>
      </div>
    </div>
  )
}

export default Register
