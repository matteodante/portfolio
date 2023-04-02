import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { WaterPass } from "three-stdlib";
import { useFrame, extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";

extend({ WaterPass });
export default function Post({ children }) {
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
        intensity={0.3}
      />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}
