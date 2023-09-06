import { Component } from "react"
import "./Input.scss"
import imgSend from "../../../assets/images/send.png"

class InputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <>
        <input
          type="text"
          id="inputField"
          placeholder="Send a message"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className="inputComponent"
        />
        <button className="btnSend">
          <img src={imgSend} alt="img-send" />
        </button>
        {/* <p>Vous avez entré : {this.state.inputValue}</p> */}
      </>
    )
  }
}

export default InputComponent
