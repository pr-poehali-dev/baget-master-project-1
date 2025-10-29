import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="text-primary-foreground py-12 px-4 bg-red-900">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">"Магия Багета" Багетная мастерская</h3>
        <p className="text-primary-foreground/80 mb-6">
          Искусство в каждой детали
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-accent transition-colors">
            <Icon name="Instagram" size={24} />
          </a>
          <a href="https://vk.com/magbaget" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.41c-.29.34-.85.72-1.37.72h-1.24c-.37 0-1.11-.1-1.95-.94-.67-.67-1.31-1.22-1.85-1.22-.14 0-.28.02-.4.07-.49.18-.69.85-.69 1.62 0 .37-.3.67-.67.67h-.73c-.82 0-3.33-.27-5.52-2.53-2.62-2.7-4.95-8.09-5.01-8.22-.19-.45.09-.68.48-.68h1.24c.4 0 .53.24.64.52.12.33 1.17 2.9 2.69 4.72.36.43.64.63.88.63.12 0 .24-.03.34-.1.52-.34.42-2.47.4-2.92 0-.19 0-1.05-.34-1.52-.22-.31-.61-.44-1.01-.52-.06-.02.07-.28.29-.4.47-.26 1.14-.31 1.89-.31h.41c.77.01 1 .06 1.29.13.6.14.6.52.55 1.9-.02.35-.03.74-.03 1.21 0 .1-.01.21-.01.32-.03.69-.06 1.47.37 1.78.09.06.21.09.34.09.22 0 .5-.15.94-.59 1.61-1.95 2.76-4.97 2.81-5.1.08-.15.25-.4.41-.48.09-.04.19-.06.29-.06h1.24c.47 0 .76.21.64.63-.15.54-1.88 4.28-2.1 4.66-.19.31-.25.44 0 .79.18.26.79.77 1.19 1.23.73.82 1.3 1.51 1.45 1.99.16.47-.07.71-.59.71z"/>
            </svg>
          </a>
          <a href="https://t.me/mag_baget" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Icon name="Send" size={24} />
          </a>
        </div>
        <div className="mt-8 text-primary-foreground/60 text-sm space-y-3">
          <div className="flex justify-center gap-4 text-xs">
            <a href="/privacy-policy" className="hover:text-accent transition-colors underline">Политика конфиденциальности</a>
            <span>•</span>
            <a href="/terms" className="hover:text-accent transition-colors underline">Пользовательское соглашение</a>
          </div>
          <p>© 2024 Магия Багета. Все права защищены.</p>
          <p>ИП Лукинский Антон Эдуардович<br />ОГРНИП 323508100708727</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;