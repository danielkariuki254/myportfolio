import React, { useState, useEffect } from "react";

const Typewriter = ({ sentences, speed }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeText = () => {
      const currentSentence = sentences[currentSentenceIndex];

      if (currentIndex < currentSentence.length) {
        setDisplayedText(currentSentence.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Clear the text after typing the full sentence
        setTimeout(() => {
          clearText();
        }, speed * 2); // Adjust the delay as needed
      }
    };

    const clearText = () => {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
        setDisplayedText("");
      }, speed);
    };

    const typingInterval = setInterval(typeText, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, currentSentenceIndex, sentences, speed]);

  return (
    <span style={{ display: "inline-block", width: "300px" }}>
      {displayedText}
    </span>
  );
};

export default Typewriter;
