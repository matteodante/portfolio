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
        <title>Matteo Dante</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Canvas />
      <Overlay />
    </>
  );
}
