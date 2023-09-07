import "./styles/Resources.scss"
import ResourcesCard from "../components/Resources/ResourcesCard"
import campfire from "../assets/images/campfire.png"
import zombie from "../assets/images/zombie.png"
import hunt from "../assets/images/hunt.png"
import food from "../assets/images/food.png"

const resourcesData = [
  {
    id: 1,
    resourcesTitle: "How to make fire ?",
    resourcesImg: campfire,
  },
  {
    id: 2,
    resourcesTitle: "How to survive a zombie ?",
    resourcesImg: zombie,
  },
  {
    id: 3,
    resourcesTitle: "How to hunt without getting killed ?",
    resourcesImg: hunt,
  },
  {
    id: 4,
    resourcesTitle: "How to choose the right food ?",
    resourcesImg: food,
  },
]

function Resources() {
  return (
    <div className="resourcesadvice">
      <div className="resourcetitle">
        <h2>Survival Advice</h2>
      </div>
      {resourcesData.map((resource) => (
        <ResourcesCard
          key={resource.id}
          resourcesTitle={resource.resourcesTitle}
          resourcesImg={resource.resourcesImg}
        />
      ))}
    </div>
  )
}

export default Resources
