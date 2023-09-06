import { Canvas } from "@react-three/fiber"
import Blob from "../components/Blob/Blob"

export default function Home() {
  return (
    <>
      <Canvas
        className="canvas"
        style={{ width: "100vw", height: "100vh", margin: "auto" }}
        width={window.innerWidth}
        height={window.innerHeight}
        gl={{ antialias: true }}
        camera={{ position: [0.0, 0.0, 8.0] }}
      >
        <Blob />
      </Canvas>
    </>
  )
}
