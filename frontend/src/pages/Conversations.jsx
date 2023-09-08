import CardConversation from "../components/CardConversations/CardConversations"
import { useState, useEffect } from "react"
import axios from "axios"
import "./styles/Conversations.scss"

function Conversations() {
  const [convers, setConvers] = useState(null)
  const conversation = [
    {
      name: "Jean patriste",
      convers: "Salut t'as pas une carotte à dépanne ?",
      lu: false,
    },
    {
      name: "Marie Dubois",
      convers: "Oui, j'en ai une. Où es-tu ?",
      lu: false,
    },
    {
      name: "Pierre Leclerc",
      convers: "J'ai besoin d'un tournevis, tu en as un ?",
      lu: false,
    },
    {
      name: "Sophie Martin",
      convers: "Désolée, je n'en ai pas. Essaye chez Paul.",
      lu: true,
    },
    {
      name: "Luc Dupont",
      convers: "Salut, ça va bien ?",
      lu: true,
    },
    {
      name: "Alice Bernard",
      convers: "Oui, ça va. Comment ça se passe chez toi ?",
      lu: true,
    },
    {
      name: "Pauline Lefebvre",
      convers: "Pas mal, mais il fait vraiment chaud aujourd'hui !",
      lu: true,
    },
    {
      name: "Thomas Durand",
      convers: "Oui, c'est vrai. Prends soin de toi !",
      lu: true,
    },
    {
      name: "Léa Dufresne",
      convers: "Merci, toi aussi !",
      lu: true,
    },
    {
      name: "Louis Girard",
      convers: "Salut tout le monde !",
      lu: true,
    },
  ]

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${conversation.length}`
    axios
      .get(url)
      .then((response) => {
        const updatedConversation = conversation.map((item, index) => ({
          ...item,
          name:
            response.data.results[index].name.first +
            response.data.results[index].name.last,
          pic: response.data.results[index].picture.large,
        }))

        setConvers(updatedConversation)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

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
