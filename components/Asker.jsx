import { useSnapshot } from "valtio";
import { state } from "./store";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, forwardRef } from "react";

export default function Asker() {
  const snap = useSnapshot(state);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(state.phrase);

  const inputRef = useRef();

  const ask = async (e) => {
    console.log("Asked");
    e.preventDefault();
    setResponse("Let me think...");
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputRef.current.value,
      }),
    });

    if (!response.ok) {
      setResponse(
        "I'm sorry but something went wrong. Please try again later."
      );
      return;
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResponse((prev) => prev + chunkValue);
    }
    setLoading(false);
  };

  return (
    <div className="customizer">
      <div className="response-section">
        <Typewriter text={response} />
      </div>
      <div className="ask-section">
        <input
          ref={inputRef}
          className="ask-input"
          type="text"
          placeholder="Christ bless you!"
        />
        <button onClick={ask} type="submit">
          ASK
        </button>
      </div>
      <div className="ask"></div>
      <button className="exit" onClick={() => (state.intro = true)}>
        GO BACK
      </button>
    </div>
  );
}

function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, [text]);

  return <p>{currentText}</p>;
}
