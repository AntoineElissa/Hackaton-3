import { useState } from "react"
import { getCurrentTime } from "../services/utils.js"

import "./styles/Ia.scss"
import InputComponent from "../components/General/Input/Input"

import imgIa from "../assets/images/ia.png"
// import imgNayan from "../assets/images/profilNayan.png"
import Prompt from "../components/General/prompts/Prompt"

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
