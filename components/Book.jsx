import { Image, Text, useCursor, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import getUuid from "uuid-by-string";
import { useRoute } from "wouter";

const GOLDENRATIO = 1.61803398875;

export default function Book(props) {
  const book = useRef();
  const { nodes } = useGLTF("/obj/open_book.glb");
  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime();
    book.current.rotation.x = THREE.MathUtils.lerp(
      book.current.rotation.x,
      Math.cos(t / 10) / 10 + 0.25,
      1
    );
    book.current.rotation.y = THREE.MathUtils.lerp(
      book.current.rotation.y,
      Math.sin(t / 10) / 4,
      1
    );
    book.current.rotation.z = THREE.MathUtils.lerp(
      book.current.rotation.z,
      Math.sin(t / 10) / 10,
      1
    );
  });
  return (
    <group
      {...props}
      ref={book}
      dispose={null}
      position={[0, GOLDENRATIO / 1.5, 0.2]}
      rotation={[Math.random(), 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        scale={0.02}
        geometry={nodes.Object_2.geometry}
        material={nodes.Object_2.material}
      />
    </group>
  );
}

useGLTF.preload("/obj/open_book.glb");
