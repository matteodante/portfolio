import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "./store";
import Asker from "./Asker";
import Resume from "./Resume";

export function Overlay() {
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { y: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { y: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { y: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  const configResume = {
    initial: {
      y: 100,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: { y: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { y: 100, opacity: 0, transition: { ...transition, delay: 0 } },
  };
  return (
    <div
      onClick={() => (state.animation = (state.animation + 1) % 7)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <motion.div
          animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }}
          transition={transition}
        ></motion.div>
      </motion.header>
      <AnimatePresence>
        {snap.intro ? (
          <motion.section key="main" {...config}>
            <Introducing />
          </motion.section>
        ) : snap.chat ? (
          <motion.section key="custom" {...config}>
            <Asker />
          </motion.section>
        ) : (
          <motion.section key="resume" {...configResume}>
            <Resume />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

function Introducing() {
  const snap = useSnapshot(state);
  return (
    <div className="section--container">
      <motion.div
        key="title"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 40,
          restDelta: 0.001,
          duration: 0.3,
        }}
      >
        <h1>MATTEO DANTE</h1>
        <h2>
          &#129302; AI <span>PORTFOLIO</span>
        </h2>
      </motion.div>
      <div className="support--content">
        <motion.div
          key="p"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 7,
            stiffness: 30,
            restDelta: 0.001,
            duration: 0.6,
            delay: 0.2,
            delayChildren: 0.2,
          }}
        >
          <p></p>
          <button
            style={{ background: snap.color }}
            onClick={() => (state.intro = false)}
          >
            ASK ME SOMETHING
          </button>
        </motion.div>
      </div>
    </div>
  );
}
