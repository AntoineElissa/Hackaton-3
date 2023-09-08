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
  const [skills, setSkills] = useState(null)
  const [loaded, setLoaded] = useState(false)
  // const [prompt, setPrompt] = useState(null)

  const preparePrompt = (survivors) => {
    const prompt1 = `Imagines un monde post apocalyptique. il y a des zombies, il fait chaud, il y a des tornades, tsunami, seismes... . une application permets de rencontrer des personnes survivalistes autour de sois.
    imagines une description amusante et saugrenue pour une personne nommée ${survivors.name.first} ${survivors.name.last}, de sexe ${survivors.gender} et d'age ${survivors.dob.age} qui souhaite rencontrer d'autres personnes. soit créatif !
    en anglais max 150 caractères`

    const prompt2 = `Dans un monde apocalyprique, peux-tu me montrer 3 skills qui serait utile pour une communauté. Peux-tu répondre sous la forme d'un tableau [{skill: "bucheron", emoji: "🪓"},{etc..}}] pour que je puisse exploiter le tableau, entoure le deux simple quote, en anglais Merci ! `

    return [prompt1, prompt2]
  }

  const sendToGPT = async (survivors, index) => {
    if (survivors !== null && survivors) {
      const prompt = preparePrompt(survivors[index])
      // console.log("prompt : " + prompt)
      const resultPrompt1 = await getOpenai(prompt[0]) // Await the result here
      const resultPrompt2 = await getOpenai(prompt[1])
      const validJSON = resultPrompt2.replace(/'/g, '"')
      const skillsArray = JSON.parse(validJSON)
      setDescription(resultPrompt1)
      setSkills(skillsArray)
      setLoaded(true)
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
    setLoaded(false)
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
          description={description} // Pass the description here
          skills={skills}
          index={index}
          loaded={loaded}
          onClickLeft={() => setIndex((prev) => prev - 1)}
          onClickRight={() => setIndex((prev) => prev + 1)}
        />
      )}
    </div>
  )
}

export default Meet
