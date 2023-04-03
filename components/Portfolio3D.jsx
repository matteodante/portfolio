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
  Center,
  Text,
  OrbitControls,
  TrackballControls,
  Lightformer,
  ContactShadows,
  MeshTransmissionMaterial,
  Text3D,
  Box,
} from "@react-three/drei";
import { useControls } from "leva";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState, useMemo, useEffect } from "react";
import Frames from "./Frames";
import VideoText from "./VideoText";
import Floor from "./Floor";
import Post from "./Post";
import Stars from "./Stars";
import {
  SSR,
  SSAO,
  LUT,
  Bloom,
  EffectComposer,
} from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { RGBELoader } from "three-stdlib";
import { BoxGeometry } from "three";

("use client");

export default function Graphics() {
  const [perfSucks, degrade] = useState(false);
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={<Loader />}>
        <Canvas
          gl={{ logarithmicDepthBuffer: true, antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 15], fov: 25 }}
        >
          <PerformanceMonitor onDecline={() => degrade(true)} />
          <Lights />
          <PostPro />
          <Box>
            <meshBasicMaterial></meshBasicMaterial>
          </Box>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Env />
        </Canvas>
      </Suspense>
    </main>
  );
}

function PostPro() {
  const texture = useLoader(LUTCubeLoader, "/F-6800-STD.cube");
  return (
    <EffectComposer disableNormalPass>
      <SSR />
      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.75}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}

function Lights() {
  return (
    <>
      <color attach="background" args={["#15151a"]} />
      <hemisphereLight intensity={2} />
      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, -1.16, 0]}
        scale={15}
        blur={0.5}
        opacity={1}
        far={20}
      />
    </>
  );
}

function Env() {
  return (
    <Environment resolution={512}>
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -9]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 9]}
        scale={[10, 1, 1]}
      />
      {/* Sides */}
      <Lightformer
        intensity={2}
        rotation-y={Math.PI / 2}
        position={[-50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-y={-Math.PI / 2}
        position={[50, 2, 0]}
        scale={[100, 2, 1]}
      />
      {/* Key */}
      <Lightformer
        form="ring"
        color="red"
        intensity={10}
        scale={2}
        position={[10, 5, 10]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
  );
}
