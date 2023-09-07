import React from "react"
import { useState } from "react"
// import { getOpenai } from "../../services/test"
import "./ResourcesCard.scss"

function ResourcesCard(props) {
  const { resourcesTitle, resourcesImg } = props

  const prompt = resourcesTitle

  const [message, setMessage] = useState(null)

  return (
    <div className="resource-card">
      <h3>{resourcesTitle}</h3>
      <div className="wrap-resource-content">
        <img className="resource-img" src={resourcesImg} alt="" />
        <button
          className="buttonResources"
          // onClick={setMessage(getOpenai(prompt))}
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default ResourcesCard
