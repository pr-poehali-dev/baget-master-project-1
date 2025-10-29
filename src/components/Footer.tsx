import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/afa9bda0-c461-4d4d-a1d2-2084a58fa005.jpeg')" }}>
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="container mx-auto text-center relative z-10">
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