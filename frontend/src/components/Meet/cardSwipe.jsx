import React from "react"
import imgArrowLeft from "../../assets/images/arrowLeft-white.png" // Importez l'image de gauche
import imgArrowRight from "../../assets/images/arrowRight-white.png" // Importez l'image de droite
// import nayan from "../../assets/images/profilNayan.png" // Importez l'image de swipe

function CardSwipe({
  survivor,
  index,
  onClickLeft,
  onClickRight,
  description,
}) {
  const { name, picture } = survivor

  return (
    <section className="swipe">
      <div className="swipe__imgSwipe">
        <div className="swipe__arrows">
          <button onClick={onClickLeft}>
            <img src={imgArrowLeft} alt="arrow-left" />
          </button>
          <button onClick={onClickRight}>
            <img src={imgArrowRight} alt="arrow-right" />
          </button>
        </div>
        <div className="wrap-img">
          <img src={picture.large} alt="img-swipe" />
        </div>
      </div>

      <h2 style={{ margin: "0", padding: "0" }}>
        <em>
          {name.last} {name.first}
        </em>
      </h2>

      <div className="swipe__contentSwipe">
        <div className="content__descr">
          <h4> Description </h4>
          <div className="content__descr__text"></div>
        </div>
        <div className="content__skills">
          <h4> Skills </h4>
          <div className="content__skills__text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSwipe
