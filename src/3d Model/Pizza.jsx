import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Pizza(props) {
  const pizzaRef = useRef()
  const { nodes, materials } = useGLTF('model/scene.gltf')

  useFrame(() => {
    if (pizzaRef.current) {
      pizzaRef.current.rotation.y += 0.006 // rotate on Y-axis
    }
  })

  return (
    <group ref={pizzaRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        scale={[2.1, 2.1, 2.1]}
      />
    </group>
  )
}

useGLTF.preload('model/scene.gltf')

export default Pizza
