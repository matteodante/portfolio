import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLocation, useRoute } from "wouter";
import Frame from "./Frame";
import Model from "./Model";

const GOLDENRATIO = 1.61803398875;
export default function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 0.8));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 1, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
}
