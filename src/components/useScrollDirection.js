// src/hooks/useScrollDirection.js
import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState('up');

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setDirection('down');
      } else if (currentScrollTop < lastScrollTop) {
        setDirection('up');
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return direction;
}

export default useScrollDirection; // Exporta el hook
