import Canvas from "@/components/Scene";
import { Overlay } from "@/components/Overlay";
import { Loader } from "@react-three/drei";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Canvas />
      <Overlay />
    </>
  );
}
