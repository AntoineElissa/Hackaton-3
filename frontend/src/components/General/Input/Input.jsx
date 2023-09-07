import { useState } from "react"

import "./Input.scss"
import imgSend from "../../../assets/images/send.png"

function InputComponent({ addPrompt }) {
  const [value, setValue] = useState(null)

  const getMessages = async () => {
    addPrompt("send", value)

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
        id: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }

    try {
      const response = await fetch("http://localhost:4242/openAPI", options)
      const data = await response.json()
      addPrompt("receive", data.choices[0].message.content)
    } catch (error) {
      console.error(error)
    } finally {
      setValue(null)
    }
  }

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
      <button className="btnSend" onClick={getMessages}>
        <img src={imgSend} alt="img-send" />
      </button>
    </>
  )
}

export default InputComponent
