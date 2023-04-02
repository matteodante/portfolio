import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <Canvas shadows >
          <Scene />
        </Canvas>
      </Suspense>
    </main>
  );
}

function Scene() {
  return (    
    <>  
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>  
  );
}