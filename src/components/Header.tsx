import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/9a76ae31-5621-4f8a-ba52-894a9af11a38.jpg')" }}>
      <div className="absolute inset-0 bg-white/75"></div>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10 flex-nowrap">
        <div className="flex items-center gap-3 flex-shrink-0">
          <img 
            src="https://cdn.poehali.dev/files/40a4138e-6e31-4536-a1e6-cbdf5428848d.png" 
            alt="Магия Багета" 
            className="h-16 w-16 lg:h-20 lg:w-20 object-contain"
          />
          <div>
            <h1 className="text-red-700 text-3xl lg:text-4xl whitespace-nowrap leading-none" style={{ fontFamily: "'Great Vibes', cursive" }}>Магия Багета</h1>
            <p className="text-xs lg:text-sm text-muted-foreground font-semibold mx-0 text-center">Багетная мастерская</p>
          </div>
        </div>
        <div className="hidden md:flex gap-2 lg:gap-4 xl:gap-6 flex-nowrap items-center flex-shrink-0">
          <a href="#services" className="hover:text-accent transition-colors text-red-900 font-medium text-xs whitespace-nowrap">Услуги</a>
          <a href="#works" className="hover:text-accent transition-colors text-red-900 font-medium text-xs whitespace-nowrap">Примеры работ</a>
          <a href="#gallery" className="hover:text-accent transition-colors text-red-900 font-medium text-xs whitespace-nowrap">Галерея</a>
          <Link to="/articles" className="hover:text-accent transition-colors text-red-900 font-medium text-xs whitespace-nowrap">Про оформление</Link>
          <a href="#contact" className="hover:text-accent transition-colors text-red-900 font-medium text-xs whitespace-nowrap">Контакты</a>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#services" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
            <a href="#works" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Примеры работ</a>
            <a href="#gallery" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Галерея</a>
            <Link to="/articles" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Про оформление</Link>
            <a href="#contact" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;