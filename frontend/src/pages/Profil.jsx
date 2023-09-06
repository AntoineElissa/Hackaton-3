import ProfilDescription from "../components/profil/ProfilDescription"
import "./styles/Profil.scss"

function Profil() {
  return (
    <div className="profil">
      <section className="profil__title">
        <h2> Profil </h2>
      </section>
      <ProfilDescription />
    </div>
  )
}

export default Profil
