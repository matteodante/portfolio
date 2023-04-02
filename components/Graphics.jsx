import * as THREE from "three";
import { Suspense, useRef } from "react";
import {
  useGLTF,
  Environment,
  CameraControls,
  Sky,
  Float,
  useFBX,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

("use client");

export default function Graphics() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <Canvas shadows>
          <Camera />
          <Scene />

          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </main>
  );
}

function Camera(props) {
  const cameraRef = useRef();

  useFrame((state, delta) => {});

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={50}
        rotation={[0, -Math.PI / 2, 0]}
        position={[1, 1, 0.3]}
      />
    </>
  );
}

function Scene(props) {
  const gltf = useLoader(GLTFLoader, "/obj/scene.gltf");
  return <primitive shadows castShadow object={gltf.scene} />;
}

function Sphere({
  color = "hotpink",
  floatIntensity = 15,
  position = [0, 0, 0],
  scale = 1,
}) {
  return (
    <Float floatIntensity={floatIntensity}>
      <mesh castShadow position={position} scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color={color} roughness={1} />
      </mesh>
    </Float>
  );
}
