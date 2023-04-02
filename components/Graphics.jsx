import * as THREE from "three";
import {
  Environment,
  MeshReflectorMaterial,
  Sky,
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
} from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Frames from "./Frames";
import VideoText from "./VideoText";
import Floor from "./Floor";
import Post from "./Post";
import Stars from "./Stars";
("use client");

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
  // Front
  //{ position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(327482),
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(325185),
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(358574),
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(227675),
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(911738),
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(1738986),
  },
];

export default function Graphics() {
  return (
    <main className="w-screen h-screen">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0, 0] }}>
        <SoftShadows />
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
        <Post />
        <Stars />
        <Environment preset="city" />
      </Canvas>
    </main>
  );
}
