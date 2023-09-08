import Log from "./pages/Log"

/* STYLES */
import "./App.scss"

/* PACKAGES */
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

/* COMPONENTS */
import Home from "./pages/Home"
import Header from "./components/General/Header"
import Profil from "./pages/Profil"
// import Radar from "./pages/Radar"
import Alert from "./pages/Alert"
import Ia from "./pages/Ia"
import Discuss from "./pages/Discuss"
import Meet from "./pages/Meet"
import Resources from "./pages/Resources"
import Zones from "./pages/Zones"
import Navbar from "./components/General/Navbar"
import Register from "./pages/Register"
import RadarTest from "./pages/RadarTest"
import Conversations from "./pages/Conversations"

import GeneralContext from "./services/GeneralContext"

import { conversType } from "./services/test"
import { v4 as uuidv4 } from "uuid"
import Marquee from "./components/Marquee/Marquee"

function App() {
  const [survivors, setSurvivors] = useState(null)
  const [tabSurvivors, setTabSurvivors] = useState([])
  const [convers, setConvers] = useState([])

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        const data = response.data.results
        const tableauInfos = data.map((survivor) => {
          return {
            name: survivor.name,
            pic: survivor.picture,
            gender: survivor.gender,
            dob: survivor.dob,
          }
        })

        const tableauConvers = data
          .filter((survivor, index) => index < conversType.length)
          .map((survivor, index) => ({
            name: survivor.name.first + " " + survivor.name.last,
            pic: survivor.picture.large,
            convers: conversType[index].convers,
            lu: conversType[index].lu,
            id: uuidv4(),
          }))

        setSurvivors(data)
        setTabSurvivors(tableauInfos)
        setConvers(tableauConvers)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <GeneralContext.Provider
        value={{
          survivors,
          convers, // Assurez-vous que setConvers est inclus ici
          tabSurvivors,
          setSurvivors,
          setConvers,
        }}
      >
        <header className="wrap-header">
          <Header />
          {/* Afficher Marquee uniquement sur la page /home */}
        </header>
        <div className="wrap-marquee">
          <Marquee />
        </div>
        <main className="wrap-content">
          <Routes>
            <Route path="/" element={<Log />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            {/* <Route path="/radar" element={<Radar />} /> */}
            <Route path="/radar" element={<RadarTest />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/ia" element={<Ia />} />
            <Route path="/discuss/:conversationId" element={<Discuss />} />
            <Route path="/meet" element={<Meet />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <div className="wrap-nav">
          <Navbar />
        </div>
      </GeneralContext.Provider>
    </>
  )
}

export default App
