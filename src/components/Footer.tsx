import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-4 bg-white/75">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground mb-2">© 2024 Магия Багета. Все права защищены.</p>
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/privacy" className="hover:text-red-700 transition-colors">Политика конфиденциальности</Link>
          <Link to="/terms" className="hover:text-red-700 transition-colors">Условия использования</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
