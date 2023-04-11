import { proxy } from "valtio";

const state = proxy({
  intro: true,
  animation: 1,
  colors: ["#000", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  color: "#000",
  phrase:
    "Hello and welcome to my website! I'm the Matteo's AI assistant here to help you learn more about me and my professional background. Please let me know how I can assist you today!",
});

export { state };
