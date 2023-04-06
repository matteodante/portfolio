import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useTexture, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "./store";
import { easing } from "maath";

export default function Soldier(props) {
  const snap = useSnapshot(state);
  const [index, setIndex] = useState(1);
  useFrame((state, delta) => {});
  const { nodes, materials, animations } = useGLTF("/Soldier-transformed.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5);
  }, [index, actions, names]);

  return (
    <group castShadow receiveShadow {...props} dispose={null} scale={0.2}>
      <group name="Scene">
        <group
          ref={ref}
          onClick={() => setIndex((index + 1) % names.length)}
          name="Character"
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.02}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            name="vanguard_Mesh"
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            castShadow
            name="vanguard_visor"
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Soldier-transformed.glb");
