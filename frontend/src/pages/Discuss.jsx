import "./styles/Discuss.scss"
import io from "socket.io-client"
import { useEffect, useState, useRef } from "react"

const socket = io.connect("http://localhost:3001")

function Discuss() {
  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("")
  const [messageHistory, setMessageHistory] = useState([]) // Store the message history
  const messageHistoryRef = useRef(null)

  const sendMessage = () => {
    socket.emit("send_message", { message })
    // Add the sent message to the message history
    setMessageHistory([...messageHistory, { text: message, type: "sent" }])
    setMessage("") // Clear the input field after sending
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message)
      // Add the received message to the message history
      setMessageHistory([
        ...messageHistory,
        { text: data.message, type: "received" },
      ])
    })
  }, [socket, messageHistory])

  useEffect(() => {
    if (messageHistoryRef.current) {
      messageHistoryRef.current.scrollTop =
        messageHistoryRef.current.scrollHeight
    }
  }, [messageHistory])

  return (
    <div className="discuss">
      <section className="discuss__title">
        <input
          placeholder="Message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
        <h1> Message:</h1>

        <div className="message-history" ref={messageHistoryRef}>
          {messageHistory.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        {messageReceived && (
          <div className="received">
            <strong>Received:</strong> {messageReceived}
          </div>
        )}
      </section>
    </div>
  )
}

export default Discuss
