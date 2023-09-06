import RadarMap from "../components/radarMap"
import "./styles/Radar.scss"

function Radar() {
  return (
    <div className="radar">
      <section className="radar__title"></section>
      <section className="radar__search"></section>
      <section className="radar__map">
        <RadarMap />
      </section>
      <section className="radar__filters"></section>
    </div>
  )
}

export default Radar
