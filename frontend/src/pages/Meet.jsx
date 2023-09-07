import "./styles/Meet.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import CardSwipe from "../components/Meet/cardSwipe"
import { getOpenai } from "../services/test"

function Meet() {
  // const [init, setInit] = useState(false)
  const [survivors, setSurvivors] = useState(null)
  const [index, setIndex] = useState(0)
  const [description, setDescription] = useState(null)
  // const [prompt, setPrompt] = useState(null)

  const preparePrompt = (survivors) => {
    const prompt = `Imagines un monde post apocalyptique. Internet marche encore, et une application permets de rencontrer des personnes survivalistes autour de sois.
    Peux-tu me générer une description amusante pour une personnage nommé ${survivors.name.first} ${survivors.name.last}, de sexe ${survivors.gender} d'age ${survivors.dob.age}, soit créatif !
    Peux-tu également me lister 5 compétences qui pourraient être utiles en terme de survivalisme ? (fonction de l'age, et du sexe) `

    return prompt
  }

  const sendToGPT = (survivors, index) => {
    if (survivors !== "null" && survivors) {
      const prompt = preparePrompt(survivors[index])
      const result = getOpenai(prompt)
      // console.log("resultat : ", result)
      setDescription(result)
    }
  }

  /* fetch */
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        setSurvivors(response.data.results)
        sendToGPT(response.data.results, index)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  /* Gestion index */
  useEffect(() => {
    if (index < 0) {
      setIndex(survivors.length - 1)
    }

    if (survivors && index >= survivors.length) {
      setIndex(0)
    }

    /* GEPETO */
    sendToGPT(survivors, index)
  }, [index, survivors])

  useEffect(() => {}, [index])

  return (
    <div className="meet">
      <section className="meet__title">
        <h2>Meeting survivor 🤝</h2>
      </section>
      {survivors && survivors.length > 0 && (
        <CardSwipe
          survivor={survivors[index]}
          description={description}
          index={index}
          onClickLeft={() => setIndex((prev) => prev - 1)}
          onClickRight={() => setIndex((prev) => prev + 1)}
        />
      )}
    </div>
  )
}

export default Meet
