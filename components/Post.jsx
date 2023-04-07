import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { easing } from "maath";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GlitchMode } from "postprocessing";
import Stars from "./Stars";

export default function Post({ children }) {
  const ref = useRef();
  return (
    <EffectComposer>
      <Stars />
      <Glitch
        delay={[3, 4]} // min and max glitch delay
        duration={[0.6, 1.0]} // min and max glitch duration
        strength={[0.3, 0.6]} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.4} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
      />
    </EffectComposer>
  );
}
