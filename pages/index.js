import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { useGLTF, Environment, CameraControls, Sky, Float  } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <Canvas shadows >
          <Scene />
          <CameraControls makeDefault />
          <Sky inclination={0.52} scale={20} />
        </Canvas>
      </Suspense>
    </main>
  );
}


function Scene(props) {
  const { nodes, materials } = useGLTF('/livingroom.glb')
  return (    
    <> 
      <Sphere position={[-2, 2, -8]} scale={0.8} />
    </>  
  );
}


function Sphere({ color = "hotpink", floatIntensity = 15, position = [0, 0, 0], scale = 1 }) {
  return (
    <Float floatIntensity={floatIntensity}>
      <mesh castShadow position={position} scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color={color} roughness={1} />
      </mesh>
    </Float>
  )
}





  
useGLTF.preload('/bedroom.glb')
