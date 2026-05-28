import { useEffect, useRef } from 'react';

function CursorDot() {
  const dot = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    
    const loop = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);
      
      if (dot.current) {
        dot.current.style.transform =
          `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    
    raf = requestAnimationFrame(loop);
    
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={dot} className="cursor-dot" />
  );
}

export default CursorDot;
