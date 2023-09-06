import "./styles/Home.scss"
import Marquee from "../components/Marquee/Marquee.jsx"

function Home() {
  return (
    <div className="home">
      <div className="home__news">
        <Marquee />
      </div>
      <div className="home__globals"></div>
      <div className="home__widgets"></div>
    </div>
  )
}

export default Home
