import {
  MeshReflectorMaterial,
  MeshBasicMaterial,
  Reflector,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  SpotLight,
} from "@react-three/drei";

const materialProps = {
  blur: [300, 100],
  resolution: 2048,
  mixBlur: 1,
  mixStrength: 50,
  roughness: 5,
  depthScale: 50,
  minDepthThreshold: 0.4,
  maxDepthThreshold: 1.4,
  color: "#070707",
  metalness: 0.8,
};

export default function Floor(props) {
  const positions = [
    [0, 0, 0],
    [3, 0, 0],
    [-3, 0, 0],
    [0, 0, -1],
  ];

  return (
    <>
      {[
        [-Math.PI / 2, 0, 0],
        [0, -Math.PI / 2, 0],
        [0, Math.PI / 2, 0],
        [0, 0, 0],
      ].map((rotation, index) => (
        <mesh
          key={index}
          castShadows
          receiveShadow
          rotation={rotation}
          position={positions[index]}
        >
          <planeGeometry args={[10000, 10000]} />
          <MeshReflectorMaterial {...materialProps} />
        </mesh>
      ))}
    </>
  );
}
