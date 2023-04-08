import { useSnapshot } from "valtio";
import { state } from "./store";

export default function Asker() {
  const snap = useSnapshot(state);
  const ask = () => {
    console.log("asked");
  };
  return (
    <div className="customizer">
      <div className="color-options"></div>
      <div className="ask">
        <textarea
          className="ask-textarea"
          placeholder="Christ bless you!"
        ></textarea>
        <div className="ask-button">
          <button>ASK</button>
        </div>
      </div>
      <button className="exit" onClick={() => (state.intro = true)}>
        GO BACK
      </button>
    </div>
  );
}
