import "./styles/Discuss.scss"
import io from "socket.io-client"
import { useEffect, useState, useRef } from "react"
import { getCurrentTime } from "../services/utils.js"

import Prompt from "../components/General/prompts/Prompt"
import imgIa from "../assets/images/ia.png"
import arrow from "../assets/images/send.png"
const socket = io.connect("http://localhost:3001")

function Discuss() {
  const [message, setMessage] = useState("")
  const [time, setTime] = useState(null)

  const [messageHistory, setMessageHistory] = useState([]) // Store the message history
  const messageHistoryRef = useRef(null)

  useEffect(() => {
    if (messageHistoryRef.current) {
      messageHistoryRef.current.scrollTop =
        messageHistoryRef.current.scrollHeight
    }
    if (messageHistory) {
      // console.log("valeur: ", messageHistory[0].text)

      setTime(getCurrentTime)
    }
  }, [messageHistory])

  const sendMessage = () => {
    socket.emit("send_message", { message })
    // Add the sent message to the message history
    setMessageHistory([...messageHistory, { text: message, type: "send" }])
    setMessage("") // Clear the input field after sending
  }

  return (
    <div className="discuss">
      {/* <div className="message-history" ref={messageHistoryRef}> */}
      <div className="message-history" ref={messageHistoryRef}>
        {messageHistory.map((message, index) => (
          <div key={index} className="wrapmessage">
            <Prompt
              type="receive"
              data={message.text}
              time={time}
              pic={imgIa}
            />
          </div>
        ))}
      </div>
      <section className="discuss-title">
        <input
          className="niquetaraceben"
          placeholder="Message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input
          type="image"
          src={arrow}
          onClick={sendMessage}
          className="niquetaraceben2"
        />
        {/* <button onClick={sendMessage} className="">Send Message</button> */}
      </section>
      {/* ))} */}

      {/* {messageReceived && (
          <div className="received">
            <strong>Received:</strong> {messageReceived}
          </div>
        )} */}
    </div>
  )
}

export default Discuss
