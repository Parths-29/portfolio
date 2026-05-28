import { useState, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function ScrambleText({ text, className = '' }) {
  const [display, setDisplay] = useState(text);
  const timerRef = useRef(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) =>
            i < iteration
              ? char
              : char === ' '
              ? ' '
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(timerRef.current);
      }
      
      iteration += 0.6;
    }, 40);
  }, [text]);

  return (
    <span
      className={`scramble-text ${className}`}
      onMouseEnter={scramble}
      style={{ 
        fontFamily: 'inherit', 
        letterSpacing: 'inherit',
        cursor: 'default'
      }}
    >
      {display}
    </span>
  );
}

export default ScrambleText;
