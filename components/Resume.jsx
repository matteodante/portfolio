/* eslint-disable @next/next/no-img-element */
import { state } from "./store";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="customizer">
      <button className="exit" onClick={() => (state.chat = true)}>
        GO BACK
      </button>
      <button className="download">SAVE IT</button>
      <div className="resume">
        <div className="cover-photo">
          <img src="/me.jpeg" className="profile" alt="me" />
        </div>
        <div className="resume-body">
          <h3 className="profile-name">Matteo Dante</h3>
          <p className="about">Full Stack Developer</p>
        </div>
        <div className="description">
          <h5>Summary</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
            veritatis asperiores aperiam, quae laudantium illo sequi maiores
            sapiente? Assumenda illum inventore natus, amet totam ut eveniet
            iste eaque! Quidem.
          </p>
        </div>
        <div className="description">
          <h5>Skills</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
            veritatis asperiores aperiam, quae laudantium illo sequi maiores
            sapiente? Assumenda illum inventore natus, amet totam ut eveniet
            iste eaque! Quidem.
          </p>
        </div>
        <div className="description">
          <h5>Educations</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
            veritatis asperiores aperiam, quae laudantium illo sequi maiores
            sapiente? Assumenda illum inventore natus, amet totam ut eveniet
            iste eaque! Quidem.
          </p>
        </div>
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
