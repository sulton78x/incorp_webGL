/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/bodymap_footLEFT.gltf")
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Contours002.geometry}
        material={materials.contourlines}
        position={[3.13, 157.1, -3.19]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh  />
    </group>
  )
}

useGLTF.preload("/bodymap_footLEFT.gltf")