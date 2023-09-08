import "./styles/Meet.scss"
import { useContext, useEffect, useState } from "react"
import CardSwipe from "../components/Meet/cardSwipe"
import { getOpenai } from "../services/test"

import GeneralContext from "../services/GeneralContext"

function Meet() {
  // const [init, setInit] = useState(false)

  const [index, setIndex] = useState(0)
  const [description, setDescription] = useState(null)
  const [skills, setSkills] = useState(null)
  const [loaded, setLoaded] = useState(false)
  // const [prompt, setPrompt] = useState(null)

  const { tabSurvivors } = useContext(GeneralContext)

  const preparePrompt = (survivors) => {
    const prompt1 = `Imagines un monde post apocalyptique. il y a des zombies, il fait chaud, il y a des tornades, tsunami, seismes... . une application permets de rencontrer des personnes survivalistes autour de sois.
    imagines une description amusante et saugrenue pour une personne nommée ${survivors.name.first} ${survivors.name.last}, de sexe ${survivors.gender} et d'age ${survivors.dob.age} qui souhaite rencontrer d'autres personnes. soit créatif !
    en anglais max 150 caractères`

    const prompt2 = `Dans un monde apocalyprique, peux-tu me montrer 3 skills qui serait utile pour une communauté. Peux-tu répondre sous la forme d'un tableau [{skill: "bucheron", emoji: "🪓"},{etc..}}] pour que je puisse exploiter le tableau, entoure le deux simple quote, en anglais Merci ! `

    return [prompt1, prompt2]
  }

  const sendToGPT = async (survivors, index) => {
    // console.log(survivors[index])
    if (survivors[index] !== null && survivors) {
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
    sendToGPT(tabSurvivors, index)
  }, [])

  /* Gestion index */
  useEffect(() => {
    if (index < 0) {
      setIndex(tabSurvivors.length - 1)
    }

    if (tabSurvivors && index >= tabSurvivors.length) {
      setIndex(0)
    }

    /* GEPETO */
    sendToGPT(tabSurvivors, index)
    setLoaded(false)
  }, [index])

  return (
    <div className="meet">
      <section className="meet__title">
        <h2>Meeting survivor 🤝</h2>
      </section>
      {tabSurvivors && tabSurvivors.length > 0 && (
        <CardSwipe
          survivor={tabSurvivors[index]}
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
