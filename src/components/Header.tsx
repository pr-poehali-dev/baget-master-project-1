import { useState } from "react";
import Icon from "@/components/ui/icon";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/9a76ae31-5621-4f8a-ba52-894a9af11a38.jpg')" }}>
      <div className="absolute inset-0 bg-white/75"></div>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/40a4138e-6e31-4536-a1e6-cbdf5428848d.png" 
            alt="Магия Багета" 
            className="h-20 w-20 object-contain"
          />
          <div>
            <h1 className="text-red-700 text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Магия Багета</h1>
            <p className="text-sm text-muted-foreground mx-9">Багетная мастерская</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-accent transition-colors text-red-900 font-medium">Услуги</a>
          <a href="#works" className="hover:text-accent transition-colors text-red-900 font-medium">Примеры работ</a>
          <a href="#gallery" className="hover:text-accent transition-colors text-red-900 font-medium">Галерея</a>
          <a href="#about" className="hover:text-accent transition-colors text-red-900 font-medium">О нас</a>
          <a href="#contacts" className="hover:text-accent transition-colors text-red-900 font-medium">Контакты</a>
        </div>
        <button 
          className="md:hidden text-red-900 transition-transform duration-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Меню"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={32} />
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-t relative z-10 animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="hover:text-accent transition-colors text-red-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#works" 
              className="hover:text-accent transition-colors text-red-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Примеры работ
            </a>
            <a 
              href="#gallery" 
              className="hover:text-accent transition-colors text-red-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#about" 
              className="hover:text-accent transition-colors text-red-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#contacts" 
              className="hover:text-accent transition-colors text-red-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
