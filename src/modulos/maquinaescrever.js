import React, { useState, useEffect } from 'react';
import '../CSS/App.css'; // Para estilos adicionais

const Typewriter = ({ text = '', speed = 100, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (!isDeleting && index <= text.length) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    } else if (isDeleting && index >= 0) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          clearInterval(interval);
          setIsDeleting(false);
        }
      }, speed);
    }

    return () => clearInterval(interval);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">_</span>
    </span>
  );
};

export default Typewriter;
