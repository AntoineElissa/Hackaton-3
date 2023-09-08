import React, { useEffect, useState, useRef, useContext } from "react"
import { getCurrentTime } from "../services/utils.js"
import { useParams } from "react-router-dom"
import Prompt from "../components/General/prompts/Prompt"
import imgNayan from "../assets/images/profilNayan.png"
import arrow from "../assets/images/send.png"
import GeneralContext from "../services/GeneralContext"
import io from "socket.io-client"
import "./styles/Discuss.scss"

const socket = io.connect("http://localhost:3001")

function Discuss() {
  const [message, setMessage] = useState("")
  const [time, setTime] = useState(null)
  const [messageHistory, setMessageHistory] = useState([])
  const messageHistoryRef = useRef(null)
  const [currentUser, setCurrentUser] = useState(null) // Update this state to store the current user

  const { conversationId } = useParams()
  const { convers } = useContext(GeneralContext)

  useEffect(() => {
    // Mettez à jour currentUser lorsque convers change
    const userParams = convers.find((item) => item.id === conversationId)
    // console.log("convers:", convers)
    // console.log("user params:", userParams)

    if (userParams) {
      setCurrentUser(userParams) // Update currentUser with the userParams
      if (userParams.convers !== "") {
        setMessageHistory([
          ...messageHistory,
          {
            text: userParams.convers,
            type: "send",
            pic: userParams.pic,
          },
        ])
      }
    }

    if (messageHistoryRef.current) {
      messageHistoryRef.current.scrollTop =
        messageHistoryRef.current.scrollHeight
    }

    setTime(getCurrentTime)
  }, [convers, conversationId])

  const sendMessage = () => {
    socket.emit("send_message", { message })
    setMessageHistory([
      ...messageHistory,
      { text: message, type: "receive", pic: imgNayan },
    ])
    setMessage("")
  }

  return (
    <div className="discuss">
      <div className="resume-contact">
        <img src={currentUser ? currentUser.pic : ""} alt="img-contak" />
        <h4>{currentUser ? `${currentUser.name}` : ""}</h4>
      </div>
      <div className="message-history" ref={messageHistoryRef}>
        {messageHistory.map((message, index) => (
          <div key={index} className="wrapmessage">
            <Prompt
              type={message.type}
              data={message.text}
              time={time}
              pic={message.pic}
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
      </section>
    </div>
  )
}

export default Discuss
