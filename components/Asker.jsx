import { state } from "./store";
import { useEffect, useRef, useState } from "react";

export default function Asker() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const inputRef = useRef();

  const ask = async (e) => {
    console.log("Asked");
    e.preventDefault();

    if (loading) {
      return;
    }

    setResponse("");
    setLoading(true);

    state.phrase = "Let me think...";

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
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
        setResponse((prev) => prev + chunkValue);
      }
    } catch (error) {
      state.phrase = "Please try again later.";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="customizer">
      <div className="response-section">
        <Typewriter text={state.phrase} />
        <p>{response}</p>
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
