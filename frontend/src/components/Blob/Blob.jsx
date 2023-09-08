import React from "react"
import "./Blob.scss"
import redBlob from "./redBlob.svg"
import orangeBlob from "./orangeBlob.svg"
import lightYellowBlob from "./lightYellowBlob.svg"
import temp from "./temperature.svg"
import tornado from "./tornado.svg"
import zombieIcon from "./zombieIcon.svg"
import dangerous from "./dangerous.svg"

const Blob = ({ temperature }) => {
  let blobImage = null

  if (temperature > 40) {
    blobImage = redBlob
  } else if (temperature >= 30 && temperature <= 35) {
    blobImage = orangeBlob
  } else if (temperature < 30) {
    blobImage = lightYellowBlob
  } else {
    blobImage = redBlob
  }

  return (
    <div className="Global-Blob-infos">
      <div className="global-infos">
        <p className="title-globalInfos">Global infos</p>
        <div className="tornado">
          <img src={tornado} alt="tornado icon" />
          <p>Safe</p>
        </div>
        <div className="tornado">
          <img src={zombieIcon} alt="zombie icon" />
          <p>Medium</p>
        </div>
        <div className="tornado">
          <img src={dangerous} alt="dangerous icon" />
          <p>Dangerous</p>
        </div>
      </div>
      <div className="Blob">
        <div className="temperature-container">
          <div className="temperature">
            <img src={temp} alt="temperature icon" />
            <p>{temperature}43,2°C</p>
          </div>
          {blobImage && <img className="blobBlob" src={blobImage} alt="blob" />}
        </div>
      </div>
    </div>
  )
}

export default Blob
