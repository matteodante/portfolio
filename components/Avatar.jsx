import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useTexture, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "./store";
import { easing } from "maath";

export function Avatar(props) {
  const snap = useSnapshot(state);
  const [index, setIndex] = useState(1);
  useFrame((state, delta) => {});
  const { nodes, materials, animations } = useGLTF("/avatar-transformed.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5);
  }, [index, actions, names]);

  return (
    <group scale={0.003} castShadow {...props} dispose={null}>
      <group name="AuxScene">
        <group
          castShadow
          ref={ref}
          onClick={() => setIndex((index + 1) % names.length)}
          position={[0, -89.16, -3.92]}
        >
          <primitive object={nodes.mixamorig7Hips} />
          <skinnedMesh
            name="Ch33_Belt"
            geometry={nodes.Ch33_Belt.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Belt.skeleton}
          />
          <skinnedMesh
            name="Ch33_Pants"
            geometry={nodes.Ch33_Pants.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch33_Eyelashes"
            geometry={nodes.Ch33_Eyelashes.geometry}
            material={materials.Ch33_hair}
            skeleton={nodes.Ch33_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch33_Hair"
            geometry={nodes.Ch33_Hair.geometry}
            material={materials.Ch33_hair}
            skeleton={nodes.Ch33_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch33_Shoes"
            geometry={nodes.Ch33_Shoes.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Shoes.skeleton}
          />
          <skinnedMesh
            name="Ch33_Suit"
            geometry={nodes.Ch33_Suit.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Suit.skeleton}
          />
          <skinnedMesh
            name="Ch33_Shirt"
            geometry={nodes.Ch33_Shirt.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch33_Tie"
            geometry={nodes.Ch33_Tie.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Tie.skeleton}
          />
          <skinnedMesh
            name="Ch33_Body"
            geometry={nodes.Ch33_Body.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Body.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/avatar-transformed.glb");
