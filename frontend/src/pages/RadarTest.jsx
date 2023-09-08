import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "./styles/RadarTest.scss"
import { useEffect, useState, useRef } from "react"
import mapLogo from "../assets/images/radarImg/mapLogo.png"
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
import globeImg from "../assets/images/radarImg/globe.png"
// import mars3d from "../assets/images/radarImg/globeGif.gif"

export default function Map() {
  // ------------ Switch from Globe image to Map ----------
  const [showMap, setShowMap] = useState(false)
  const handleToggleMap = () => {
    setShowMap(true)
  }

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
    },
    {
      id: 1,
      name: "electricity",
      imgUrl: "src/assets/images/radarImg/electricity.png",
      imgSrc: electricityImg,
    },
    {
      id: 2,
      name: "hospital",
      imgUrl: "src/assets/images/radarImg/hospital.png",
      imgSrc: hospitalImg,
    },
    {
      id: 3,
      name: "petrol",
      imgUrl: "src/assets/images/radarImg/petrol.png",
      imgSrc: petrolImg,
    },
    {
      id: 4,
      name: "rebel",
      imgUrl: "src/assets/images/radarImg/rebel.png",
      imgSrc: rebelImg,
    },
    {
      id: 5,
      name: "shelter",
      imgUrl: "src/assets/images/radarImg/shelter.png",
      imgSrc: shelterImg,
    },
    {
      id: 6,
      name: "shop",
      imgUrl: "src/assets/images/radarImg/shop.png",
      imgSrc: shopImg,
    },
    {
      id: 7,
      name: "water",
      imgUrl: "src/assets/images/radarImg/water.png",
      imgSrc: waterImg,
    },
    {
      id: 8,
      name: "wood",
      imgUrl: "src/assets/images/radarImg/wood.png",
      imgSrc: woodImg,
    },
    {
      id: 9,
      name: "zombie",
      imgUrl: "src/assets/images/radarImg/zombie.png",
      imgSrc: zombieImg,
    },
  ]

  // ----------- To generate random positions for the POIs -------------

  function generatePositions(centerLat, centerLng, radius, numPositions) {
    const positions = []

    for (let i = 0; i < numPositions; i++) {
      const randomLatOffset = (Math.random() - 0.5) * radius * 2
      const randomLngOffset = (Math.random() - 0.5) * radius * 2

      const lat = centerLat + randomLatOffset / 110.574
      const lng = centerLng + randomLngOffset / (111.32 * Math.cos(centerLat))

      positions.push([lat, lng])
    }
    return positions
  }

  const iconTabWithPositions = iconTab.map((icon) => ({
    ...icon,
    positions: generatePositions(
      userLocation ? userLocation.latitude : 43.6,
      userLocation ? userLocation.longitude : 1.4,
      0.9,
      10
    ),
  }))

  // ---------- To filter the POI -------------
  const [selectedOptions, setSelectedOptions] = useState([])
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }
  const filteredIcons = iconTabWithPositions.filter((poi) =>
    selectedOptions.includes(poi.name)
  )

  return (
    <div className="mapPage">
      <section className="radarTitle">
        <h2 className="mapTitle">Radar Zone</h2>
        <img className="mapLogoImg" src={mapLogo} alt="logo map" />
      </section>
      <div className="mapMain">
        {!showMap ? (
          <button
            type="button"
            onClick={handleToggleMap}
            className="showMapButton"
          >
            <img className="globeImg" src={globeImg} alt="globe" />
          </button>
        ) : null}
        {showMap && (
          <MapContainer
            center={
              userLocation
                ? [userLocation.latitude, userLocation.longitude]
                : [43.6, 1.4]
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
                  : [43.6, 1.4]
              }
              ref={mapRef}
            ></Marker>

            <div className="mapFilter">
              {filteredIcons.map((poi) =>
                poi.positions.map((position, index) => (
                  <Marker
                    position={position}
                    icon={L.icon({
                      iconUrl: poi.imgUrl,
                      iconSize: [28, 28],
                      iconAnchor: [14, 28],
                    })}
                    key={poi.id + "-" + index}
                  ></Marker>
                ))
              )}
            </div>
          </MapContainer>
        )}
      </div>
      <div className="categoryList">
        <h2 className="filterTitle">Filters</h2>
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
