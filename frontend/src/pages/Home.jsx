import "./styles/Home.scss"
import Widget from "../components/General/Widget"
import survivalressources from "../assets/images/ressources.png"
import survivalzone from "../assets/images/survivalzone.png"
import discussion from "../assets/images/chat.png"
import meet from "../assets/images/meet.png"
import Blob from "../components/Blob/Blob"
import Marquee from "../components/Marquee/Marquee"

const widgetData = [
  {
    id: 1,
    widgetColor: "#7Bccc4",
    widgetName: "Survival zones",
    widgetImg: survivalzone,
    linkedPage: "/zones",
  },
  {
    id: 2,
    widgetColor: "#CCEBC5",
    widgetName: "Survival Advice",
    widgetImg: survivalressources,
    linkedPage: "/resources",
  },
  {
    id: 3,
    widgetColor: "#43A2CA",
    widgetName: "Chat",
    widgetImg: discussion,
    linkedPage: "/conversations",
  },
  {
    id: 4,
    widgetColor: "#0868AC",
    widgetName: "Meet Survivors",
    widgetImg: meet,
    linkedPage: "/meet",
  },
]

function Home() {
  return (
    <div className="home">
      <div className="home__news">
        <Marquee />
      </div>
      <div className="home__globals">
        <Blob />
      </div>
      <div className="home__widgets">
        {widgetData.map((widget, index) => (
          <Widget key={index} {...widget} />
        ))}
      </div>
    </div>
  )
}

export default Home
