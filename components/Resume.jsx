import { state } from "./store";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="customizer">
      <button className="exit" onClick={() => (state.chat = true)}>
        GO BACK
      </button>
      <div className="resume">
        <h1>Matteo Dante</h1>
      </div>
    </div>
  );
}

/*

      <button
        className="download"
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
      </button> 

*/
