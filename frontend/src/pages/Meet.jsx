import "./styles/Meet.scss"
import nayan from "../assets/images/chat.png"

import imgArrowLeft from "../assets/images/arrowLeft-white.png"
import imgArrowRight from "../assets/images/arrowRight-white.png"

function Meet() {
  return (
    <div className="meet">
      <section className="meet__title">
        <h2> Meeting survivor 🤝 </h2>
      </section>
      <section className="swipe">
        <div className="swipe__imgSwipe">
          <div className="swipe__arrows">
            <img src={imgArrowLeft} alt="arrow-left" />
            <img src={imgArrowRight} alt="arrow-right" />
          </div>
          <div className="wrap-img">
            <img src={nayan} alt="img-swipe" />
          </div>
        </div>

        <span style={{ margin: "0", padding: "0" }}>
          {" "}
          <em> 10 km</em>
        </span>

        <div className="swipe__contentSwipe">
          <div className="content__descr">
            <h6> Description </h6>
            <div className="content__descr__text"></div>
          </div>
          <div className="content__skills">
            <h6> Skills </h6>
            <div className="content__skills__text"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Meet
