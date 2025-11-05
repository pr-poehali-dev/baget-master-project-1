import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/afa9bda0-c461-4d4d-a1d2-2084a58fa005.jpeg')" }}>
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://t.me/mag_baget" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors">
            <Icon name="Send" size={24} />
          </a>
          <a href="https://instagram.com/mag_baget" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors">
            <Icon name="Instagram" size={24} />
          </a>
          <a href="https://vk.com/magbaget" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors" aria-label="VK">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.53h-1.34c-.54 0-.71-.43-1.68-1.4-0.85-0.82-1.22-0.93-1.43-0.93-0.29 0-0.38 0.09-0.38 0.52v1.28c0 0.34-0.11 0.55-1.01 0.55-1.49 0-3.14-0.9-4.3-2.58-1.74-2.45-2.22-4.3-2.22-4.68 0-0.21 0.09-0.41 0.52-0.41h1.34c0.39 0 0.54 0.18 0.69 0.59 0.75 2.13 2.01 4 2.52 4 0.19 0 0.28-0.09 0.28-0.58v-2.29c-0.06-0.97-0.57-1.05-0.57-1.4 0-0.17 0.14-0.34 0.37-0.34h2.11c0.33 0 0.45 0.17 0.45 0.55v3.08c0 0.33 0.15 0.45 0.24 0.45 0.19 0 0.35-0.12 0.71-0.48 1.1-1.24 1.89-3.16 1.89-3.16 0.1-0.22 0.29-0.41 0.68-0.41h1.34c0.4 0 0.49 0.2 0.4 0.55-0.15 0.71-1.75 3.16-1.75 3.16-0.17 0.28-0.23 0.4 0 0.72 0.17 0.23 0.73 0.72 1.1 1.15 0.66 0.76 1.17 1.39 1.31 1.83 0.13 0.44-0.07 0.66-0.51 0.66z"/>
            </svg>
          </a>
        </div>
        <p className="text-muted-foreground mb-2">© 2025 Магия Багета. Все права защищены.</p>
        <div className="flex justify-center gap-6 text-sm mb-3">
          <Link to="/privacy" className="hover:text-red-700 transition-colors">Политика конфиденциальности</Link>
          <Link to="/terms" className="hover:text-red-700 transition-colors">Условия использования</Link>
          <Link to="/payment-delivery" className="hover:text-red-700 transition-colors">Оплата и доставка</Link>
        </div>
        <p className="text-muted-foreground text-xs">
          ИП Лукинский Антон Эдуардович<br />
          ОГРНИП 323508100708727
        </p>
      </div>
    </footer>
  );
};

export default Footer;