import { Text, Text3D } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

export default function VideoText(props) {
  /*const [video] = useState(() => {
    const sources = ["1.mp4", "2.mp4", "3.mp4"];
    const randomSource = sources[Math.floor(Math.random() * sources.length)];

    const videoElement = Object.assign(document.createElement("video"), {
      src: randomSource,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    });

    return videoElement;
  });
  useEffect(() => {
    void video.play();
  }, [video]);*/

  return (
    <Text scale={0.2} font="/Inter-Bold.woff" letterSpacing={-0.06} {...props}>
      {props.children}
      <meshPhysicalMaterial thickness={5} clearcoat={1} color={"#ffffff"} />
    </Text>
  );
}
