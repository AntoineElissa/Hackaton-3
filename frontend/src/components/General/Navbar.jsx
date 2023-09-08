import "./styles/Navbar.scss"
import homelogo from "../../assets/images/hackatonhome.png"
import profilogo from "../../assets/images/profilhackaton.png"
import radar from "../../assets/images/radarhackaton.png"
import alertlogo from "../../assets/images/alerthackaton.png"
import ailogo from "../../assets/images/AIhackaton.png"

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      {/* TEMPORAIRE  */}
      <nav className="navTemporaire">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              <img src={homelogo} alt="homelogo" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil" activeClassName="active">
              <img src={profilogo} alt="logo profil" />
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/radar" activeClassName="active">
              <img src={radar} alt="logo radar" />
              Radar
            </NavLink>
          </li>
          <li>
            <NavLink to="/alert" activeClassName="active">
              <img src={alertlogo} alt="logo alerte" />
              Alert
            </NavLink>
          </li>
          <li>
            <NavLink to="/ia" activeClassName="active">
              <img src={ailogo} alt="logo ia" />
              AI
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
