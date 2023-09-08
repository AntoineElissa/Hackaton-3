import "./styles/Discuss.scss"
import io from "socket.io-client"
// import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { getCurrentTime } from "../services/utils.js"

import Prompt from "../components/General/prompts/Prompt"
import imgNayan from "../assets/images/profilNayan.png"
import arrow from "../assets/images/send.png"
const socket = io.connect("http://localhost:3001")

function Discuss() {
  const [message, setMessage] = useState("")
  const [time, setTime] = useState(null)

  const [messageHistory, setMessageHistory] = useState([]) // Store the message history
  const messageHistoryRef = useRef(null)

  const [local, setLocal] = useState("")

  useEffect(() => {
    const storedConversationString = localStorage.getItem("conversation")
    if (storedConversationString) {
      const storedConversation = JSON.parse(storedConversationString)
      setMessageHistory([
        ...messageHistory,
        { text: storedConversation.convers, type: "receive" },
      ])
      setLocal(storedConversation)
      // Utilisez storedConversation comme objet JavaScript dans votre composant
    }
  }, [])

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
      <div className="resume-contact">
        <img src={local.pic} alt="img-contak" />
        <h4>{local.name}</h4>
      </div>
      {/* <div className="message-history" ref={messageHistoryRef}> */}
      <div className="message-history" ref={messageHistoryRef}>
        {messageHistory.map((message, index) => (
          <div key={index} className="wrapmessage">
            <Prompt
              type="receive"
              data={message.text}
              time={time}
              pic={imgNayan}
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
