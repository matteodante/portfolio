import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

export function Kitchen(props) {
  const { nodes, materials } = useGLTF("/obj/kitchen/scene-transformed.glb");
  return (
    <group castShadow receiveShadow {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.14}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[1480, 2812, 1554]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Small_Modern_Kitchen_Structure_0.geometry}
              material={materials.Structure}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Counters_0.geometry}
              material={materials.Counters}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Stools_0.geometry}
              material={materials.Stools}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Blinds_0.geometry}
              material={materials.Blinds}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Sink_0.geometry}
              material={materials.Sink}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Hob_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Extractor_0.geometry}
              material={materials.Extractor}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Light_0.geometry}
              material={materials.Light}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Light_0_1.geometry}
              material={materials.Light}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_ChoppingBoard_0.geometry}
              material={materials.ChoppingBoard}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_Pots_0.geometry}
              material={materials.Pots}
            />
            <mesh
              geometry={nodes.Small_Modern_Kitchen_PictureFrame_0.geometry}
              material={materials.PictureFrame}
            />
            <mesh
              geometry={nodes.Plant_Plant_0.geometry}
              material={materials.Plant}
              position={[0.03, -0.14, -0.26]}
              scale={[0.03, 0.02, 0.03]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/obj/kitchen/scene-transformed.glb");
