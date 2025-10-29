import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryItems = [
    { image: "https://cdn.poehali.dev/files/32a3e740-baff-4e7d-b69d-cc8612a02bd4.jpg", alt: "Вышивка в классическом багете", title: "Классическое оформление вышивки с парспарту" },
    { image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/922ff82a-fcc9-446d-a3bb-0b2653423f24.jpg", alt: "Оформленная работа 2", title: "Современный стиль" },
    { image: "https://cdn.poehali.dev/files/04d55c82-94e2-4600-9b2f-e3ac08f759be.jpg", alt: "Натюрморт в золотом багете", title: "Индивидуальные решения" },
    { image: "https://cdn.poehali.dev/files/d31feca3-7949-4619-841d-e4a63a5164ea.jpg", alt: "Обложки TIME в музейном оформлении", title: "Музейное качество" },
    { image: "https://cdn.poehali.dev/files/83ceccb5-3339-4421-ae45-26717d01a7ff.jpg", alt: "Объемное оформление замка с ключом", title: "Объемное оформление" },
    { image: "https://cdn.poehali.dev/files/276cf8b7-25c6-4c3d-8b4d-4682f725338a.jpg", alt: "Акварель собора в черном багете", title: "Эксклюзивные багеты" },
    { image: "https://cdn.poehali.dev/files/0bea69c2-b361-49fc-8302-ee1eb79e1040.jpg", alt: "Футболка ЦСКА с автографом в раме", title: "Спортивная атрибутика" },
    { image: "https://cdn.poehali.dev/files/95c64322-c54b-44ea-8e9b-ea9dd2f91ffc.jpg", alt: "Коллекция наград и медалей в раме", title: "Оформление наград" },
    { image: "https://cdn.poehali.dev/files/13398175-6438-4cdc-a142-1eccad990cc3.jpg", alt: "Историческая акция в светлой раме", title: "Оформление документов" },
    { image: "https://cdn.poehali.dev/files/19718a09-e210-44bb-b28e-0f8f019b6ebb.jpg", alt: "Натюрморт с цветами в деревянной раме", title: "Живопись маслом" },
    { image: "https://cdn.poehali.dev/files/143f62f8-aa24-4856-9de3-a9d23f87be77.jpg", alt: "Коллекция вышивок крестом в серебристой раме", title: "Вышивка крестом" },
    { image: "https://cdn.poehali.dev/files/5cbe3455-3ebe-4580-9a1f-8d87987e2a15.jpg", alt: "Акварельная иллюстрация кита в чёрной раме", title: "Акварельная живопись" },
    { image: "https://cdn.poehali.dev/files/c752dd21-8e48-4b74-9508-91ca88140894.jpg", alt: "Кружевная салфетка на синем фоне в белой раме", title: "Оформление кружева" },
    { image: "https://cdn.poehali.dev/files/429cd5f9-4d1b-4e53-9587-8790fe3f1e2d.jpg", alt: "Реставрация старинной иконы", title: "Реставрация икон" },
    { image: "https://cdn.poehali.dev/files/5af37482-2bbb-444d-8557-ac24baba220e.jpg", alt: "Икона с серебряным окладом в резном багете", title: "Оформление икон" },
    { image: "https://cdn.poehali.dev/files/d77ba1bd-0735-4e8d-bb2c-0da707a35c83.jpg", alt: "Оформление подарочной карты", title: "Оформление подарочной карты" }
  ];

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
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Галерея
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-white">
            <img 
              src={galleryItems[currentSlide].image} 
              alt={galleryItems[currentSlide].alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-xl font-semibold">{galleryItems[currentSlide].title}</p>
            </div>
          </div>
          
          <button 
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" className="h-6 w-6 text-red-700" />
          </button>
          
          <button 
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" className="h-6 w-6 text-red-700" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-red-700' : 'w-2 bg-red-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
