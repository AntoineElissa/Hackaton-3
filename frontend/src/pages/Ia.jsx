import { useState } from "react"
import { getCurrentTime } from "../services/utils.js"

import "./styles/Ia.scss"
import InputComponent from "../components/General/Input/Input"

import imgIa from "../assets/images/ia.png"
// import imgNayan from "../assets/images/profilNayan.png"
import Prompt from "../components/General/prompts/Prompt"

// const data = {
//   text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
//   time: "20:50",
// }

function Ia() {
  const [prompts, setPrompts] = useState([])

  const addPrompt = (type, text) => {
    // console.log("addPrompt, text : " + text)

    const newPrompt = {
      type,
      data: { message: text, time: getCurrentTime() },
    }

    // Ajoutez le nouveau Prompt à la liste des prompts
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt])
  }

  return (
    <div className="ia">
      {/* Affichez tous les prompts existants */}
      <div className="ia__discuss">
        {prompts.map((prompt, index) => (
          <Prompt
            key={index}
            type={prompt.type}
            data={prompt.data.message}
            time={prompt.data.time}
            pic={imgIa}
          />
        ))}
      </div>
      <div className="ia__message">
        <InputComponent addPrompt={addPrompt} />
      </div>
    </div>
  )
}

export default Ia
