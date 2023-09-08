import "./CardConversations.scss"
import { useNavigate } from "react-router-dom"

function CardConversation({ conversation }) {
  const { name, convers, lu, pic, id } = conversation

  // Move the console.log statement here
  // console.log("conversation CARD : " + pic)

  const navigate = useNavigate()

  const navigateToTchat = () => {
    // const conversationString = JSON.stringify(conversation)
    // localStorage.setItem("conversation", conversationString) // Sauvegarde dans le localStorage
    navigate(`/discuss/${id}`)
  }

  return (
    // Use a conditional rendering approach
    conversation !== null && (
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
  )
}

export default CardConversation
