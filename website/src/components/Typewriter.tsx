import React, { useState, useEffect } from 'react';

/**
 * TypewriterProps interface for Typewriter component.
 * It defines the types of the props that the Typewriter component expects.
 */
interface TypewriterProps {
  words: string[];
  loop?: boolean;
}

/**
 * Typewriter component for the website.
 * It displays a list of words with a typewriter effect.
 * 
 * @param {TypewriterProps} props The props that this component expects.
 * @returns JSX.Element The Typewriter component as a JSX Element.
 */
const Typewriter: React.FC<TypewriterProps> = ({ words, loop = false }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink(!blink);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (index === words.length && loop) {
      setIndex(0);
      setReverse(false);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      if (index === words.length - 1 && !loop) return; // Stop if we're not looping
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, loop]);

  return (
    <span className="typewriter-text" style={{ color: 'black' }}>
      {words[index].substring(0, subIndex)}
      <span className="typewriter-cursor">{blink ? "|" : ""}</span>
    </span>
  );
};

// Export the Typewriter component as the default export
export default Typewriter;