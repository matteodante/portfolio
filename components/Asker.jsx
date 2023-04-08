import { useSnapshot } from "valtio";
import { state } from "./store";

export default function Asker() {
  const snap = useSnapshot(state);
  const ask = () => {
    console.log("asked");
  };
  return (
    <div className="customizer">
      <div className="color-options">
        <div class="search-bar">
          <input type="text" placeholder="Christ bless you!" />
          <button type="submit">ASK</button>
        </div>
      </div>
      <div className="ask"></div>
      <button className="exit" onClick={() => (state.intro = true)}>
        GO BACK
      </button>
    </div>
  );
}
