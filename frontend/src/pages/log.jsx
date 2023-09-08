import "./styles/log.scss"
import Login from "../components/login"

function Log() {
  return (
    <div className="log">
      <div className="register-title">
        <h2>Log In</h2>
      </div>
      <section className="log__section">
        <Login />
      </section>
    </div>
  )
}

export default Log
