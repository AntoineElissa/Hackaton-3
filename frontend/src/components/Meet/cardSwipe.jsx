import React from "react"
import { useNavigate } from "react-router-dom"
import imgArrowLeft from "../../assets/images/arrowLeft-white.png" // Importez l'image de gauche
import imgArrowRight from "../../assets/images/arrowRight-white.png" // Importez l'image de droite
import imgSend from "../../assets/images/send.png"
// import nayan from "../../assets/images/profilNayan.png" // Importez l'image de swipe

function CardSwipe({
  survivor,
  index,
  onClickLeft,
  onClickRight,
  description,
  skills,
  loaded,
}) {
  const { name, picture } = survivor
  const navigate = useNavigate()

  const navigateToDiscussPage = () => {
    navigate("/discuss")
  }

  return (
    <section className="swipe">
      <div
        className={`swipe__imgSwipe ${
          loaded ? "swipe-loaded" : "swipe-unloaded"
        }`}
      >
        <div className="wrap-img">
          <img src={picture.large} alt="img-swipe" />
        </div>

        <h2 style={{ margin: "0", padding: "0" }}>
          <em>
            {name.last} {name.first}
          </em>
        </h2>

        {!loaded && <h5> loading profil... </h5>}
      </div>

      {loaded && (
        <div className="swipe__contentSwipe">
          <div className="content__descr">
            {/* <h4> Description </h4> */}
            <div className="content__descr__text">{description}</div>
          </div>
          <div className="content__skills__text">
            {skills ? (
              skills.map((skillObj, index) => (
                <div key={index} className="skill-column">
                  <p>{skillObj.skill}</p>
                  <span>{skillObj.emoji}</span>
                </div>
              ))
            ) : (
              <p>Aucune compétence disponible</p>
            )}
          </div>
          <div className="wrap-imgSend">
            <div className="wrap-imgPlusDinspi" onClick={navigateToDiscussPage}>
              <img src={imgSend} alt="img-send" />
            </div>
            <div className="swipe-arrows">
              <button onClick={onClickLeft}>
                <img src={imgArrowLeft} alt="arrow-left" />
              </button>
              <button onClick={onClickRight}>
                <img src={imgArrowRight} alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CardSwipe
