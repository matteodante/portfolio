import Canvas from "@/components/Scene";
import { Overlay } from "@/components/Overlay";
import { Loader } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <Canvas />
      <Overlay />
    </>
  );
}
