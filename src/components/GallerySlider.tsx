import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const galleryItems = [
  { image: "https://cdn.poehali.dev/files/32a3e740-baff-4e7d-b69d-cc8612a02bd4.jpg", alt: "Вышивка в классическом багете", title: "Классическое оформление" },
  { image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/922ff82a-fcc9-446d-a3bb-0b2653423f24.jpg", alt: "Оформленная работа 2", title: "Современный стиль" },
  { image: "https://cdn.poehali.dev/files/04d55c82-94e2-4600-9b2f-e3ac08f759be.jpg", alt: "Натюрморт в золотом багете", title: "Индивидуальные решения" },
  { image: "https://cdn.poehali.dev/files/d31feca3-7949-4619-841d-e4a63a5164ea.jpg", alt: "Обложки TIME в музейном оформлении", title: "Музейное качество" },
  { image: "https://cdn.poehali.dev/files/83ceccb5-3339-4421-ae45-26717d01a7ff.jpg", alt: "Объемное оформление замка с ключом", title: "Объемное оформление" },
  { image: "https://cdn.poehali.dev/files/276cf8b7-25c6-4c3d-8b4d-4682f725338a.jpg", alt: "Акварель собора в черном багете", title: "Эксклюзивные багеты" },
  { image: "https://cdn.poehali.dev/files/0bea69c2-b361-49fc-8302-ee1eb79e1040.jpg", alt: "Футболка ЦСКА с автографом в раме", title: "Спортивная атрибутика" },
  { image: "https://cdn.poehali.dev/files/95c64322-c54b-44ea-8e9b-ea9dd2f91ffc.jpg", alt: "Коллекция наград и медалей в раме", title: "Оформление наград" },
  { image: "https://cdn.poehali.dev/files/13398175-6438-4cdc-a142-1eccad990cc3.jpg", alt: "Историческая акция в светлой раме", title: "Оформление документов" },
  { image: "https://cdn.poehali.dev/files/19718a09-e210-44bb-b28e-0f8f019b6ebb.jpg", alt: "Натюрморт с цветами в деревянной раме", title: "Живопись маслом" },
  { image: "https://cdn.poehali.dev/files/429cd5f9-4d1b-4e53-9587-8790fe3f1e2d.jpg", alt: "Реставрация старинной иконы", title: "Реставрация икон" },
  { image: "https://cdn.poehali.dev/files/5af37482-2bbb-444d-8557-ac24baba220e.jpg", alt: "Икона с серебряным окладом в резном багете", title: "Оформление икон" }
];

export const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Галерея работ</h2>
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div className="relative h-[500px] md:h-[600px]">
              <img 
                src={galleryItems[currentSlide].image}
                alt={galleryItems[currentSlide].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{galleryItems[currentSlide].title}</h3>
                <p className="text-white/80 mt-2">{currentSlide + 1} / {galleryItems.length}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Предыдущий слайд"
          >
            <Icon name="ChevronLeft" size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Следующий слайд"
          >
            <Icon name="ChevronRight" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
