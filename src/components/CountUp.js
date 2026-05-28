import { useEffect, useState, useRef } from 'react';

function CountUp({ end, duration = 1200, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      
      const startTime = performance.now();
      
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(parseFloat((eased * end).toFixed(1)));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="count-up">
      {count}{suffix}
    </span>
  );
}

export default CountUp;
