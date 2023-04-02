import { Text, Text3D } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

extend({ TextGeometry });

export default function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/drei.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text scale={0.2} font="/Inter-Bold.woff" letterSpacing={-0.06} {...props}>
      {props.children}
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}
