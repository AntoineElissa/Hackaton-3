import { useState, useEffect } from "react"

import "./Input.scss"
import imgSend from "../../../assets/images/send.png"
import axios from "axios"

function InputComponent({ addPrompt }) {
  const [value, setValue] = useState("")
  const [send, setSend] = useState(false)
  // const [requestSuccess, setRequestSuccess] = useState(false)

  useEffect(() => {
    if (send) {
      axios
        .post("http://localhost:4242/openAPI", { value })
        .then((response) => {
          if (response.status === 200) {
            // setRequestSuccess(true)
            addPrompt("send", value)
            addPrompt("receive", response.data.message)
          }
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setValue("")
          setSend(false)
        })
    }
  }, [send, value, addPrompt])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        id="inputField"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        className="inputComponent"
      />
      <button className="btnSend" onClick={() => setSend(true)}>
        <img src={imgSend} alt="img-send" />
      </button>
    </>
  )
}

export default InputComponent
