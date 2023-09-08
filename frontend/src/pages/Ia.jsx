import { useState, useEffect } from "react"
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
  const [value, setValue] = useState(null)

  const addPrompt = (type, text) => {
    const newPrompt = {
      type,
      data: { message: text, time: getCurrentTime() },
    }
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt])
  }

  const getMessages = async () => {
    // console.log(" Envoies à chatGPT avec valeurs = ", value)
    addPrompt("send", value)

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
        id: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }

    try {
      const response = await fetch("http://localhost:4242/openAPI", options)
      const data = await response.json()
      // console.log("data retour : ", data)
      addPrompt("receive", data.choices[0].message.content)
    } catch (error) {
      console.error(error)
    } finally {
      setValue("")
    }
  }

  useEffect(() => {
    // console.log(value)
  }, [value])

  useEffect(() => {
    // console.log("creation du prompt : ", prompts)
  }, [prompts])

  return (
    <>
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
          <InputComponent
            setValue={setValue}
            value={value}
            onClick={getMessages}
          />
        </div>
      </div>
    </>
  )
}

export default Ia
