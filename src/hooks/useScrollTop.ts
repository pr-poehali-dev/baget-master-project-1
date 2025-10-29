import { useState, useEffect } from "react";

interface UseScrollTopReturn {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

export const useScrollTop = (threshold: number = 300): UseScrollTopReturn => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    showScrollTop,
    scrollToTop
  };
};
