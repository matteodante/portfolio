import { state } from "./store";

export default function Resume() {
  return (
    <div className="customizer">
      <button className="exit" onClick={() => (state.chat = true)}>
        GO BACK
      </button>
      <div class="resume"></div>
    </div>
  );
}
