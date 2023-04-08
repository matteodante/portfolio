import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useTexture, useAnimations, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "./store";
import { easing } from "maath";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

useGLTF.preload("/Michelle-transformed.glb");

export function Michelle(props) {
  const snap = useSnapshot(state);
  const { nodes, materials, animations } = useGLTF("/Michelle-transformed.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);
  const html = useRef();

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
            <Html
              ref={html}
              occlude
              position={[0, 100, 100]}
              transform
              scale={10}
            >
              <Says />
            </Html>
          </group>
        </group>
      </group>
    </group>
  );
}

function Says(props) {
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: {
      x: -100,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };
  return (
    <AnimatePresence>
      {snap.intro ? (
        <motion.section key="main" {...config}></motion.section>
      ) : (
        <motion.section key="custom" {...config}>
          <div className="speech-container">
            <div className="speech-bubble">
              <p>
                Hello and welcome to my website! I&apos;m the Matteo&apos;s AI
                assistant here to help you learn more about me and my
                professional background. Please let me know how I can assist you
                today!
              </p>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
