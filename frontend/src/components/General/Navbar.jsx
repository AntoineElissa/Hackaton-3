import "./styles/Navbar.scss"

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      {/* TEMPORAIRE  */}
      <nav className="navTemporaire">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil" activeClassName="active">
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/radar" activeClassName="active">
              Radar
            </NavLink>
          </li>
          <li>
            <NavLink to="/alert" activeClassName="active">
              Alert
            </NavLink>
          </li>
          <li>
            <NavLink to="/ia" activeClassName="active">
              AI
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
