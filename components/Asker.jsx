import { useSnapshot } from "valtio";
import { state } from "./store";
import { motion, AnimatePresence } from "framer-motion";

export default function Asker() {
  const snap = useSnapshot(state);
  const ask = () => {
    console.log("asked");
  };
  return (
    <div className="customizer">
      <ResponseSection />
      <div className="ask-section">
        <div class="ask-bar">
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

function ResponseSection() {
  return <></>;
}
