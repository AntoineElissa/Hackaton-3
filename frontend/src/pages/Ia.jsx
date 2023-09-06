import "./styles/Ia.scss"
import InputComponent from "../components/General/Input/Input"

import imgIa from "../assets/images/ia.png"

function Ia() {
  return (
    <div className="ia">
      <div className="ia__title">
        <img src={imgIa} alt="img-ia" />
      </div>

      <div className="ia__discuss"></div>
      <div className="ia__message">
        <InputComponent />
      </div>
    </div>
  )
}

export default Ia
