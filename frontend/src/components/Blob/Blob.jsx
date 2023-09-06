import useSpline from "@splinetool/r3f-spline"
import { OrthographicCamera } from "@react-three/drei"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"
import Blob from "../../components/Blob/Blob"

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/1x2PFfIDcESrM0uN/scene.splinecode"
  )

  const sphereMesh = useRef()

  useFrame((state) => {
    const { clock } = state
    if (sphereMesh.current) {
      sphereMesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime()

      sphereMesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        sphereMesh.current.material.uniforms.u_intensity.value,
        0.15,
        0.02
      )
    }
  })

  return (
    <>
      <color
        attach="background"
        args={["transparent"]}
        style={{ opacity: 0.5 }}
      />

      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <mesh
            name="Sphere"
            ref={sphereMesh}
            geometry={nodes.Sphere.geometry}
            material={materials["Sphere Material"]}
            castShadow
            receiveShadow
            position={[-10, -40.5, 269]}
            scale={1.5}
          />

          <Blob />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  )
}
