import Log from "./pages/Log"

/* STYLES */
import "./App.scss"

/* PACKAGES */
import { Routes, Route } from "react-router-dom"

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
import RadarTest from "./pages/RadarTest"

function App() {
  return (
    <>
      <header className="wrap-header">
        <Header />
      </header>

      <main className="wrap-content">
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          {/* <Route path="/radar" element={<Radar />} /> */}
          <Route path="/radar" element={<RadarTest />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/ia" element={<Ia />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/zones" element={<Zones />} />
        </Routes>
      </main>
      <div className="wrap-nav">
        <Navbar />
      </div>
    </>
  )
}

export default App
