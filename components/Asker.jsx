import { useSnapshot } from "valtio";
import { state } from "./store";
import { useEffect, useRef, useState } from "react";

export default function Asker() {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const ask = async (e) => {
    console.log("Asked");
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    state.currentResponse = "";
    state.phrase = "Let me think...";

    try {
      state.story = [...state.story, inputRef.current.value];
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: state.story,
        }),
      });

      state.phrase = "";
      if (!response.ok) {
        state.phrase =
          "I'm sorry but something went wrong. Please try again later.";
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
        state.currentResponse += chunkValue;
      }
    } catch (error) {
      state.phrase = "Please try again later.";
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const exit = () => {
    state.intro = true;
    if (loading) {
      state.phrase = "What were we talking about?";
      setLoading(false);
    }
  };

  return (
    <div className="customizer">
      <div className="response-section">
        <Typewriter text={state.phrase} />
        <p>{state.currentResponse}</p>
      </div>
      <div className="ask-section">
        <input
          ref={inputRef}
          className="ask-input"
          type="text"
          placeholder="Tell me about Matteo..."
        />
        <button onClick={ask} type="submit">
          ASK
        </button>
      </div>
      <div className="ask"></div>
      <button className="exit" onClick={exit}>
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
