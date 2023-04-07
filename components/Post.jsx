import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  SSAO,
  SSR,
  LUT,
  HueSaturation,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { WaterPass } from "three-stdlib";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { LUTCubeLoader } from "postprocessing";
import { RGBELoader } from "three-stdlib";
import { TiltShift } from "@react-three/postprocessing";

export default function Post({ children }) {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <SSAO />
      <Vignette />
      <HueSaturation />
    </EffectComposer>
  );
}
