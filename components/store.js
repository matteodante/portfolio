import { proxy } from "valtio";

const state = proxy({
  intro: true,
  chat: true,
  animation: 1,
  color: "#000",
  currentResponse: "",
  story: [],
  phrase: "",
});

export { state };
