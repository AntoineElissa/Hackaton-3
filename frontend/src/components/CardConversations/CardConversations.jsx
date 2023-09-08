import "./CardConversations.scss"
import { useNavigate } from "react-router-dom"

function CardConversation({ conversation }) {
  const { name, convers, lu, pic } = conversation

  const navigate = useNavigate()

  const navigateToTchat = () => {
    const conversationString = JSON.stringify(conversation)
    localStorage.setItem("conversation", conversationString) // Sauvegarde dans le localStorage
    navigate(`/discuss`)
  }

  return (
    <div
      className={`convers ${lu ? "convlu" : "convNonlu"}`}
      onClick={navigateToTchat}
    >
      <div className="convers__img">
        <img src={pic} alt="img-pic" />
      </div>
      <div className="convers__content">
        <h4>{name}</h4>
        <span className={lu ? "lu" : "nonlu"}>{convers}</span>
      </div>
    </div>
  )
}

export default CardConversation
