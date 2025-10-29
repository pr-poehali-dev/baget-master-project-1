import { useState, useEffect } from "react";

interface UseGallerySliderProps {
  totalItems: number;
  autoPlayInterval?: number;
}

interface UseGallerySliderReturn {
  currentSlide: number;
  isAutoPlaying: boolean;
  setIsAutoPlaying: (value: boolean) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

export const useGallerySlider = ({
  totalItems,
  autoPlayInterval = 5000
}: UseGallerySliderProps): UseGallerySliderReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, autoPlayInterval]);

  return {
    currentSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide
  };
};
