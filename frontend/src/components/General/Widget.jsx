import "./styles/Widget.scss"

const Widget = (props) => {
  const { widgetColor, widgetName, widgetImg } = props

  const widgetBgColor = {
    backgroundColor: widgetColor,
  }

  return (
    <div className="widgetGlobal" style={widgetBgColor}>
      <h1 className="nameWidget">{widgetName}</h1>
      <img className="imgWidget" src={widgetImg} alt="" />
    </div>
  )
}

export default Widget
