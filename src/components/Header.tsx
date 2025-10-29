import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/3acad103-f3df-472a-a4fe-98d4149e2690.jpg')" }}>
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
            <p className="text-sm text-muted-foreground font-semibold mx-0 text-center">Багетная мастерская</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-accent transition-colors text-red-900 font-medium">Услуги</a>
          <a href="#works" className="hover:text-accent transition-colors text-red-900 font-medium">Примеры работ</a>
          <a href="#gallery" className="hover:text-accent transition-colors text-red-900 font-medium">Галерея</a>
          <Link to="/articles" className="hover:text-accent transition-colors text-red-900 font-medium">Про оформление</Link>
          <a href="#contact" className="hover:text-accent transition-colors text-red-900 font-medium">Контакты</a>
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