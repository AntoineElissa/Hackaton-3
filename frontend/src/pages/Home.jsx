import Blob from "../components/Blob/Blob"

import React, { useState } from "react"

export default function Home() {
  const [temperature, setTemperature] = useState(25) // Initialize temperature state

  const handleTemperatureChange = (newTemperature) => {
    // Function to update the temperature state
    setTemperature(newTemperature)
  }

  return (
    <div className="Home">
      <h1>Temperature Blob Test</h1>
      <input
        type="number"
        placeholder="Enter Temperature"
        value={temperature}
        onChange={(e) => handleTemperatureChange(Number(e.target.value))}
      />
      <Blob temperature={temperature} />
    </div>
  )
}
