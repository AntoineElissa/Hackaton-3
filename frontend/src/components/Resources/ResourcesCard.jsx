import React, { useState, useEffect } from "react"
import { getOpenai } from "../../services/test"
import "./ResourcesCard.scss"

function ResourcesCard(props) {
  const { resourcesTitle, resourcesImg } = props
  const [message, setMessage] = useState(null)
  const [visible, setVisible] = useState(false)
  const [displayedWords, setDisplayedWords] = useState([])
  const [wordIndex, setWordIndex] = useState(0)

  const prompt = resourcesTitle

  const handleOpenAI = () => {
    if (!visible) {
      getOpenai(prompt).then((response) => {
        const words = response.split(" ")
        setMessage(response)
        setDisplayedWords(words)
        setVisible(true)
      })
    } else {
      setMessage(null)
      setVisible(false)
      setDisplayedWords([])
      setWordIndex(0)
    }
  }

  useEffect(() => {
    if (visible) {
      const timer = setInterval(() => {
        if (wordIndex < displayedWords.length) {
          setWordIndex(wordIndex + 1)
        }
      }, 85)

      return () => {
        clearInterval(timer)
      }
    }
  }, [visible, wordIndex, displayedWords])

  return (
    <div className="resource-card">
      <h3>{resourcesTitle}</h3>
      <div className="wrap-resource-content">
        <img className="resource-img" src={resourcesImg} alt="" />
        <button className="buttonResources" onClick={handleOpenAI}>
          {visible ? "Hide Text" : "Read more"}
        </button>
      </div>
      <p>
        {visible && (
          <p>
            {displayedWords.slice(0, wordIndex).join(" ")}
            {wordIndex < displayedWords.length && <span>&nbsp;</span>}
          </p>
        )}
      </p>
    </div>
  )
}

export default ResourcesCard
