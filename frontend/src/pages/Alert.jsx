import "./styles/Alert.scss"
import { useState, useEffect } from "react"

import audioWarning from "../assets/sound/warning.mp3"

function Alert() {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const audio = new Audio(audioWarning)

    if (alert) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [alert])

  return (
    <div className={`alert ${alert ? "alerted" : ""}`}>
      <div className="alert__title">
        {!alert ? <h2> Touch for help</h2> : <h2> ! HELP ! </h2>}
      </div>
      <div
        className={`alert__buzzer ${alert ? "alerted" : ""}`}
        onClick={() => setAlert(!alert)}
      >
        <div className="carre">
          <div className="rond"></div>
          {alert ? <div className="rond_bg"></div> : ""}
        </div>
      </div>
      <div className="alert__text">
        {alert ? (
          <h2> CONTACTING SURVIVORS AROUND </h2>
        ) : (
          <h2>if any danger around </h2>
        )}
      </div>
    </div>
  )
}

export default Alert
