import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "./styles/RadarTest.scss"
import { useEffect, useState, useRef } from "react"
import mapLogo from "../assets/images/radarImg/mapLogo.png"
import searchLogo from "../assets/images/radarImg/searchLogo.png"
// import api from "../services/api"
import campingImg from "../assets/images/radarImg/camping.png"
import electricityImg from "../assets/images/radarImg/electricity.png"
import hospitalImg from "../assets/images/radarImg/hospital.png"
import petrolImg from "../assets/images/radarImg/petrol.png"
import rebelImg from "../assets/images/radarImg/Rebel.png"
import shelterImg from "../assets/images/radarImg/shelter.png"
import shopImg from "../assets/images/radarImg/shop.png"
import waterImg from "../assets/images/radarImg/water.png"
import woodImg from "../assets/images/radarImg/wood.png"
import zombieImg from "../assets/images/radarImg/zombie.png"

export default function Map() {
  // ------ To get the user's position -----------
  const [userLocation, setUserLocation] = useState(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          console.error("Geolocation error:", error)
        }
      )
    } else {
      console.error("Geolocation is not available in this browser")
    }
  }, [])

  // ----------- Use axios from api.js -----------
  // const [poi, setPoi] = useState([])

  // const reloadPoi = () =>
  //   api.get("/poi").then((response) => {
  //     setPoi(response.data)
  //   })

  // useEffect(() => {
  //   reloadPoi()
  // }, [])

  // ------------- FILTERS ---------------------

  // const filteredPoi = poi.filter((poi) => {
  //   if (selectedOptions === "all") {
  //     return true
  //   } else if (selectedOptions === "camping" && poi.cat === "camping") {
  //     return true
  //   } else if (selectedOptions === "electricity" && poi.cat === "electricity") {
  //     return true
  //   } else {
  //     return false
  //   }
  // })

  // ------------------ICONS --------------------
  const iconTab = [
    {
      id: 0,
      name: "camping",
      imgUrl: "src/assets/images/radarImg/camping.png",
      imgSrc: campingImg,
      coordx: 50,
      coordy: 2,
    },
    {
      id: 1,
      name: "electricity",
      imgUrl: "src/assets/images/radarImg/electricity.png",
      imgSrc: electricityImg,
      coordx: 51,
      coordy: 2,
    },
    {
      id: 2,
      name: "hospital",
      imgUrl: "src/assets/images/radarImg/hospital.png",
      imgSrc: hospitalImg,
      coordx: 52,
      coordy: 2,
    },
    {
      id: 3,
      name: "petrol",
      imgUrl: "src/assets/images/radarImg/petrol.png",
      imgSrc: petrolImg,
      coordx: 53,
      coordy: 2,
    },
    {
      id: 4,
      name: "rebel",
      imgUrl: "src/assets/images/radarImg/rebel.png",
      imgSrc: rebelImg,
      coordx: 54,
      coordy: 2,
    },
    {
      id: 5,
      name: "shelter",
      imgUrl: "src/assets/images/radarImg/shelter.png",
      imgSrc: shelterImg,
      coordx: 55,
      coordy: 2,
    },
    {
      id: 6,
      name: "shop",
      imgUrl: "src/assets/images/radarImg/shop.png",
      imgSrc: shopImg,
      coordx: 56,
      coordy: 2,
    },
    {
      id: 7,
      name: "water",
      imgUrl: "src/assets/images/radarImg/water.png",
      imgSrc: waterImg,
      coordx: 57,
      coordy: 2,
    },
    {
      id: 8,
      name: "wood",
      imgUrl: "src/assets/images/radarImg/wood.png",
      imgSrc: woodImg,
      coordx: 58,
      coordy: 2,
    },
    {
      id: 9,
      name: "zombie",
      imgUrl: "src/assets/images/radarImg/zombie.png",
      imgSrc: zombieImg,
      coordx: 59,
      coordy: 2,
    },
  ]

  // ---------- To filter the POI -------------
  const [selectedOptions, setSelectedOptions] = useState([])
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }
  const filteredIcons = iconTab.filter((poi) =>
    selectedOptions.includes(poi.name)
  )

  return (
    <div className="mapPage">
      <section className="radarTitle">
        <h3 className="mapTitle">Radar Zone</h3>
        <img className="mapLogoImg" src={mapLogo} alt="logo map" />
      </section>
      <section className="radarSearch">
        <img className="searchLogoImg" src={searchLogo} alt="search logo" />
        <div className="searchEntry">search something here</div>
        <button type="button" className="searchButton">
          Search
        </button>
      </section>
      <div className="mapMain">
        <MapContainer
          center={
            userLocation
              ? [userLocation.latitude, userLocation.longitude]
              : [50, 10]
          }
          zoom={7}
          scrollWheelZoom={true}
          className="map-container"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="tileLayer"
          />
          <Marker
            position={
              userLocation
                ? [userLocation.latitude, userLocation.longitude]
                : [50, 10]
            }
            ref={mapRef}
          ></Marker>

          <div className="mapFilter">
            {filteredIcons.map((poi) => (
              <Marker
                position={[poi.coordx, poi.coordy]}
                icon={L.icon({
                  iconUrl: poi.imgUrl,
                  iconSize: [28, 28],
                  iconAnchor: [14, 28],
                })}
                key={poi.id}
              ></Marker>
            ))}
          </div>
        </MapContainer>
      </div>
      <div className="categoryList">
        <h3 className="filterTitle">Filters</h3>
        <section className="filteredPoi">
          {iconTab.map((poi) => (
            <label key={poi.id}>
              <input
                type="checkbox"
                value={poi.name}
                checked={selectedOptions.includes(poi.name)}
                onChange={() => handleOptionChange(poi.name)}
              />
              {poi.name}
            </label>
          ))}
        </section>
      </div>
    </div>
  )
}
