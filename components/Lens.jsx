import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  MeshReflectorMaterial,
  ContactShadows,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export default function Lens({ children, damping = 0.15, ...props }) {}
