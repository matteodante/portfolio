//import Canvas from "../components/Scene";
import { Overlay } from "../components/Overlay";
import Head from "next/head";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("../components/Scene"), {
  ssr: false,
});

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
