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
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors">
            <Icon name="Instagram" size={24} />
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