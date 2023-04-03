import * as THREE from "three";
import { images } from "./StaticData";
import {
  Environment,
  MeshReflectorMaterial,
  Sky,
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
  Loader,
  PerformanceMonitor,
} from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Frames from "./Frames";
import VideoText from "./VideoText";
import Floor from "./Floor";
import Post from "./Post";
import Stars from "./Stars";

("use client");

export default function Graphics() {
  const [perfSucks, degrade] = useState(false);
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={<Loader />}>
        <Canvas dpr={[1, 1.5]} camera={{ fov: 120, position: [0, 0, 0] }}>
          <PerformanceMonitor onDecline={() => degrade(true)} />
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={1} />
          <directionalLight
            castShadow
            position={[0, 1, 0]}
            intensity={1.5}
            shadow-mapSize={1024}
          />
          <pointLight position={[0, 1, 0]} color="white" intensity={1} />
          <VideoText position={[0, 0.5, 1.5]} rotation={[0, 0, 0]} fontSize={3}>
            Matteo
          </VideoText>
          <VideoText position={[0, 1, 1.5]} rotation={[0, 0, 0]} fontSize={3}>
            Dante
          </VideoText>
          <Frames images={images} />
          <Floor />

          {!perfSucks && <Post />}
          {!perfSucks && <SoftShadows />}
          {!perfSucks && <Stars />}
          {!perfSucks && <Environment preset="city" />}
        </Canvas>
      </Suspense>
    </main>
  );
}
