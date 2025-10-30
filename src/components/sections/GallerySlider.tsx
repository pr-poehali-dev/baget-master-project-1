import Icon from "@/components/ui/icon";
import { useGallerySlider } from "@/hooks/useGallerySlider";
import { galleryItems } from "@/data/galleryItems";
import { useState } from "react";

const GallerySlider = () => {
  const { 
    currentSlide, 
    isAutoPlaying, 
    setIsAutoPlaying, 
    nextSlide, 
    prevSlide, 
    goToSlide 
  } = useGallerySlider({ totalItems: galleryItems.length });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Галерея</h2>
          <p className="text-muted-foreground">Лишь некоторые примеры оформления</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-white group">
            <img 
              src={galleryItems[currentSlide].image} 
              alt={galleryItems[currentSlide].alt}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{galleryItems[currentSlide].title}</h3>
            </div>
            
            <button 
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Предыдущий слайд"
            >
              <Icon name="ChevronLeft" size={32} className="text-accent" />
            </button>
            
            <button 
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Следующий слайд"
            >
              <Icon name="ChevronRight" size={32} className="text-accent" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { goToSlide(index); setIsAutoPlaying(false); }}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-accent w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all z-10"
            aria-label="Предыдущее изображение"
          >
            <Icon name="ChevronLeft" size={40} className="text-white" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all z-10"
            aria-label="Следующее изображение"
          >
            <Icon name="ChevronRight" size={40} className="text-white" />
          </button>
          
          <div className="relative max-w-full max-h-full">
            <img 
              src={galleryItems[currentSlide].image} 
              alt={galleryItems[currentSlide].alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-xl font-bold text-center">{galleryItems[currentSlide].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySlider;