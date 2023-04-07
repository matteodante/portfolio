import { proxy } from "valtio";

const state = proxy({
  intro: true,
  animation: 0,
  colors: ["#000", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  color: "#000",
});

export { state };
