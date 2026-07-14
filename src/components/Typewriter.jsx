import React, { useState, useEffect } from 'react';

// Types the text once, then leaves a blinking block cursor.
const Typewriter = ({ text = '', speed = 95 }) => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span>
      {typed}
      <span style={{ display: 'inline-block', width: 5, height: '0.85em', background: '#FBF7F5', marginLeft: 10, verticalAlign: '-0.06em', animation: 'blink 1.1s step-end infinite' }} />
    </span>
  );
};

export default Typewriter;
