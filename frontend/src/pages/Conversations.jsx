import CardConversation from "../components/CardConversations/CardConversations"
import { useContext } from "react"
import "./styles/Conversations.scss"
import GeneralContext from "../services/GeneralContext"

function Conversations() {
  const { convers } = useContext(GeneralContext)

  // console.log("conversation page : ", convers)

  return (
    <div className="conversations">
      <div className="resourcetitle">
        <h2>Conversations</h2>
      </div>
      {convers &&
        convers.map((elem, index) => {
          return <CardConversation key={index} conversation={elem} />
        })}
    </div>
  )
}
export default Conversations
