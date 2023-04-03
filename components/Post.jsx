import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  SSAO,
  SSR,
  LUT,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { WaterPass } from "three-stdlib";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { LUTCubeLoader } from "postprocessing";
import { RGBELoader } from "three-stdlib";

export default function Post({ children }) {
  const texture = useLoader(LUTCubeLoader, "/F-6800-STD.cube");
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={1}
        height={300}
        intensity={0.1}
      />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
      <LUT lut={texture} />
      <SSR />
    </EffectComposer>
  );
}
