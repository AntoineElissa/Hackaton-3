import { Component } from "react"
import "./Input.scss"

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
      <div>
        <input
          type="text"
          id="inputField"
          placeholder="Send a message"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className="inputComponent"
        />
        {/* <p>Vous avez entré : {this.state.inputValue}</p> */}
      </div>
    )
  }
}

export default InputComponent
