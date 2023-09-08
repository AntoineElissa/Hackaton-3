import "./ProfilDescription.scss"
import imgUser from "../../assets/images/profilNayan.png"
import imgMap from "../../assets/images/map.png"
import imgFire from "../../assets/images/fire.png"
import imgArrow from "../../assets/images/arrow.png"

function ProfilDescription({ dataUser }) {
  return (
    <>
      <section className="profil__description">
        <div className="profil-pic">
          <img src={imgUser} alt="img-profil" />
        </div>
        <div className="profil__nom">
          <div className="titremescouillasses">
            <h2 className="titremecouilles"> Jean BAVE</h2>
            {/* <span> Informations </span> */}
          </div>
        </div>
        <div className="profil__infos">
          <h5> Skills </h5>

          <div className="profil__infos__competences">
            <img src={imgFire} alt="img-fire" />
            <img src={imgMap} alt="img-map" />
            <img src={imgArrow} alt="img-arrow" />
          </div>
          <h5> Mobile </h5>
          <p> +XX XX XX XX XX </p>

          <h5> Location </h5>
          <p> +XX XX XX XX XX </p>
        </div>
      </section>
    </>
  )
}

export default ProfilDescription
