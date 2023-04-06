import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "./store";
import { easing } from "maath";

export function Character(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/elDA.glb");
  const shirt = useGLTF("/shirt_baked_collapsed.glb");
  const soldiers = useGLTF("/Soldier-transformed.glb");
  const { actions } = useAnimations(soldiers.animations, group);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    easing.dampC(shirt.materials.lambert1.color, snap.color, 0.25, delta);
  });
  return (
    <group
      ref={group}
      onClick={(e) => actions.Walk.play()}
      castShadow
      {...props}
      dispose={null}
      scale={0.3}
    >
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
      <mesh
        castShadow
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
      <mesh
        castShadow
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <mesh
        castShadow
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <mesh
        castShadow
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <mesh
        castShadow
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/elDA.glb");
useGLTF.preload("/Soldier-transformed.glb");
useGLTF.preload("/shirt_baked_collapsed.glb");
["/react.png", "/three2.png", "/pmndrs.png"].forEach(useTexture.preload);
