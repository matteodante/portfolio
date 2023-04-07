import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useTexture, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "./store";
import { easing } from "maath";

useGLTF.preload("/Michelle-transformed.glb");

export function Michelle(props) {
  const snap = useSnapshot(state);
  const { nodes, materials, animations } = useGLTF("/Michelle-transformed.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  useFrame((state, delta) => {});
  useEffect(() => {
    actions[names[snap.animation]].reset().fadeIn(0.5).play();
    return () => {
      if (actions[names[snap.animation]] != undefined)
        actions[names[snap.animation]].fadeOut(0.5);
    };
  }, [actions, names, snap.animation]);

  return (
    <group castShadow receiveShadow scale={0.004} {...props} dispose={null}>
      <group castShadow name="AuxScene">
        <group castShadow name="AuxScene_1">
          <group
            castShadow
            receiveShadow
            ref={ref}
            position={[0, -82.94, -1.3]}
            dispose={null}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Ch03"
              geometry={nodes.Ch03.geometry}
              material={materials.Ch03_Body}
              skeleton={nodes.Ch03.skeleton}
              dispose={null}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
