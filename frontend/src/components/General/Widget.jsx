import "./styles/Widget.scss"
import { NavLink } from "react-router-dom"

const Widget = (props) => {
  const { widgetColor, widgetName, widgetImg, linkedPage } = props

  const widgetBgColor = {
    backgroundColor: widgetColor,
  }

  return (
    <nav className="linkWidget">
      <NavLink to={linkedPage} exact activeClassName="active">
        <div className="widgetGlobal" style={widgetBgColor}>
          <h1 className="nameWidget">{widgetName}</h1>

          <img className="imgWidget" src={widgetImg} alt="" />
        </div>
      </NavLink>
    </nav>
  )
}

export default Widget
