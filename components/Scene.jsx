import { useRef, useEffect, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Environment,
  Center,
  OrbitControls,
  Loader,
  SpotLight,
  ContactShadows,
  Stage,
  Float,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store";
import dynamic from "next/dynamic";
import { Character } from "./Character";
import Post from "./Post";
import Soldier from "./Soldier";
import Droide from "./Droide";
import { Avatar } from "./Avatar";
import { Michelle } from "./Michelle";

const App = ({ position = [0, 0, 2.5], fov = 25 }) => {
  return (
    <div className="h-screen w-screen">
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position, fov }}
          gl={{ preserveDrawingBuffer: true }}
          eventPrefix="client"
          eventSource={document.getElementById("__next")}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="city" />

          <CameraRig>
            <Backdrop />
            <Center>
              <Michelle />
            </Center>
          </CameraRig>
          <Post />
        </Canvas>
      </Suspense>
    </div>
  );
};

function Backdrop() {
  const shadows = useRef();
  useFrame((state, delta) => {});
  return (
    <>
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />
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
          intensity={0.3}
          ambient={0.25}
          position={[5, 5, -10]}
        />
        <RandomizedLight
          amount={7}
          radius={5}
          intensity={0.25}
          ambient={0.55}
          position={[-5, 5, -9]}
        />
      </AccumulativeShadows>
    </>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 2.5, state.pointer.x, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

function Shirt(props) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.decal}.png`);
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );
  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
        map-anisotropy={16}
      />
    </mesh>
  );
}

useGLTF.preload("/shirt_baked_collapsed.glb");
["/react.png", "/three2.png", "/pmndrs.png"].forEach(useTexture.preload);

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
