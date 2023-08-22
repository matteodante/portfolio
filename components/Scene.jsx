'use client'
import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Center,
  Loader,
  PerformanceMonitor,
  AdaptiveDpr,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store";
import About from "./About";
import Post from "./Post";
import { Michelle } from "./Michelle";

const App = ({ position = [0, 0, 2.5], fov = 25 }) => {
  const [GoodPC, upgrade] = useState(false);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position, fov }}
          gl={{ preserveDrawingBuffer: true }}
          eventPrefix="client"
          eventSource={document.getElementById("__next")}
        >
          <PerformanceMonitor onIncline={upgrade} />
          <ambientLight intensity={2} />
          <Environment near={1} far={1000} resolution={1024} files="env.hdr" />
          <AdaptiveDpr pixelated />
          {!GoodPC ? (
            <CameraRig>
              <Center>
                <Michelle />
              </Center>
            </CameraRig>
          ) : (
            <CameraRig>
              <Backdrop />
              <Center>
                <Michelle />
              </Center>
              <Post />
            </CameraRig>
          )}
        </Canvas>
      </Suspense>
    </>
  );
};

function Backdrop() {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={100}
      alphaTest={0.85}
      scale={15}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.2]}
    >
      <RandomizedLight
        amount={8}
        radius={9}
        intensity={0.9}
        ambient={0.25}
        position={[5, 5, -10]}
      />

    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        snap.intro ? -state.viewport.width / 4 : 0,
        snap.intro ? 0 : snap.chat ? 0.1 : 0.1,
        snap.intro ? 2 : snap.chat ? 1 : 8,
      ],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [
        state.chat ? -state.pointer.y / 3.5 : 0,
        state.chat ? state.pointer.x / 2 : 0,
        0,
      ],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

export default App;
