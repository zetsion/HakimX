import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */
export default function TypingText({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150); // Adjust speed here if needed

      return () => clearTimeout(timeoutId); // Clean up timeout on unmount
    } else {
      // Reset after a delay to start typing again
      const resetTimeoutId = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
      }, 2000); // 2-second pause before resetting

      return () => clearTimeout(resetTimeoutId);
    }
  }, [charIndex, text]);
  return (
    <div
      id="animated-text"
      className="animate-blink inline-block border-r-2 border-red-600 pr-1 text-2xl font-semibold text-yellow-600"
    >
      {displayedText}
    </div>
  );
}
