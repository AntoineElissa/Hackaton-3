import "./Input.scss"
import imgSend from "../../../assets/images/send.png"

function InputComponent({ value, setValue, onClick }) {
  return (
    <>
      <input
        type="text"
        id="inputField"
        placeholder="Send a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="inputComponent"
      />
      <button className="btnSend" onClick={onClick}>
        <img src={imgSend} alt="img-send" />
      </button>
    </>
  )
}

export default InputComponent
