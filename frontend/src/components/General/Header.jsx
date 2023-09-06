import "./styles/Header.scss"
import imgLogo from "../../assets/images/img_logo.png"

function Header() {
  return (
    <div className="header">
      <h1> Apoca'tips</h1>
      <img src={imgLogo} alt="img-logo" />
    </div>
  )
}

export default Header
