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

      <LUT lut={texture} />
      <SSAO />
    </EffectComposer>
  );
}
