import ProfilDescription from "../components/profil/ProfilDescription"
import "./styles/Profil.scss"

import imgLogout from "../assets/images/logout.png"

function Profil() {
  return (
    <div className="profil">
      <section className="profil__title">
        <h2> Profil </h2>
        <button>
          <img src={imgLogout} alt="img-logout" />
        </button>
      </section>
      <ProfilDescription />
    </div>
  )
}

export default Profil
