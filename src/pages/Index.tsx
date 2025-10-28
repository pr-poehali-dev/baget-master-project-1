import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryItems = [
    { image: "https://cdn.poehali.dev/files/32a3e740-baff-4e7d-b69d-cc8612a02bd4.jpg", alt: "Вышивка в классическом багете", title: "Классическое оформление" },
    { image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/922ff82a-fcc9-446d-a3bb-0b2653423f24.jpg", alt: "Оформленная работа 2", title: "Современный стиль" },
    { image: "https://cdn.poehali.dev/files/04d55c82-94e2-4600-9b2f-e3ac08f759be.jpg", alt: "Натюрморт в золотом багете", title: "Индивидуальные решения" },
    { image: "https://cdn.poehali.dev/files/d31feca3-7949-4619-841d-e4a63a5164ea.jpg", alt: "Обложки TIME в музейном оформлении", title: "Музейное качество" },
    { image: "https://cdn.poehali.dev/files/83ceccb5-3339-4421-ae45-26717d01a7ff.jpg", alt: "Объемное оформление замка с ключом", title: "Объемное оформление" },
    { image: "https://cdn.poehali.dev/files/276cf8b7-25c6-4c3d-8b4d-4682f725338a.jpg", alt: "Акварель собора в черном багете", title: "Эксклюзивные багеты" },
    { image: "https://cdn.poehali.dev/files/0bea69c2-b361-49fc-8302-ee1eb79e1040.jpg", alt: "Футболка ЦСКА с автографом в раме", title: "Спортивная атрибутика" },
    { image: "https://cdn.poehali.dev/files/95c64322-c54b-44ea-8e9b-ea9dd2f91ffc.jpg", alt: "Коллекция наград и медалей в раме", title: "Оформление наград" },
    { image: "https://cdn.poehali.dev/files/13398175-6438-4cdc-a142-1eccad990cc3.jpg", alt: "Историческая акция в светлой раме", title: "Оформление документов" },
    { image: "https://cdn.poehali.dev/files/19718a09-e210-44bb-b28e-0f8f019b6ebb.jpg", alt: "Натюрморт с цветами в деревянной раме", title: "Живопись маслом" },
    { image: "https://cdn.poehali.dev/files/429cd5f9-4d1b-4e53-9587-8790fe3f1e2d.jpg", alt: "Реставрация старинной иконы", title: "Реставрация икон" },
    { image: "https://cdn.poehali.dev/files/5af37482-2bbb-444d-8557-ac24baba220e.jpg", alt: "Икона с серебряным окладом в резном багете", title: "Оформление икон" }
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

  const services = [
    {
      title: "Оформление картин",
      description: "Профессиональное багетное оформление живописи любого размера и стиля",
      icon: "Frame"
    },
    {
      title: "Оформление фотографий",
      description: "Индивидуальный подход к каждой фотографии — от семейных до художественных снимков",
      icon: "Camera"
    },
    {
      title: "Оформление зеркал",
      description: "Эксклюзивные рамы для зеркал, которые станут украшением любого интерьера",
      icon: "Sparkles"
    },
    {
      title: "Оформление объемных предметов",
      description: "Профессиональное оформление медалей, орденов, коллекций и других памятных предметов",
      icon: "Box"
    },
    {
      title: "Оформление вышивок",
      description: "Бережное оформление вышивок крестом, гладью, бисером с учётом всех особенностей работы",
      icon: "Scissors"
    },
    {
      title: "Оформление алмазных мозаик",
      description: "Специальное оформление алмазных мозаик с идеальной натяжкой и защитой от выцветания",
      icon: "Gem"
    },
    {
      title: "Оформление икон",
      description: "Традиционное оформление икон с соблюдением канонов и использованием качественных материалов",
      icon: "Church"
    },
    {
      title: "Оформление рисунков (Акварель, Пастель, Графика и пр.)",
      description: "Профессиональное оформление рисунков любой техники с учётом особенностей материала",
      icon: "Paintbrush"
    }
  ];

  const gallery = [
    {
      image: "https://cdn.poehali.dev/files/83124a0d-6ab1-46bd-a646-feac8b40dc20.jpg",
      title: "Оформление картин",
      description: "Багет в стиле барокко"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/10081c46-9ed8-4b99-bf50-29e4b0ff29a3.jpg",
      title: "Современная фотография",
      description: "Минималистичная рама"
    },
    {
      image: "https://cdn.poehali.dev/files/fc3e0aa4-7f72-420b-b007-8c2b6e5cebd9.jpeg",
      title: "Декоративное зеркало",
      description: "Изготовление и оформление зеркал"
    },
    {
      image: "https://cdn.poehali.dev/files/8e49e163-c6de-4fb6-bdab-e39b5f8f2ed7.jpg",
      title: "Вышивка крестом",
      description: "Элегантная деревянная рама. Двойное бархатное паспарту. Музейное стекло."
    },
    {
      image: "https://cdn.poehali.dev/files/ec5782d5-84d8-4e2e-9ec4-78c281f94109.jpg",
      title: "Православная икона",
      description: "Традиционное оформление с орнаментом"
    },
    {
      image: "https://cdn.poehali.dev/files/d561e231-8dd5-43c5-9388-07ee12f21a2e.jpg",
      title: "Акварельный рисунок",
      description: "Светлая минималистическая рамка с паспарту"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/f083b4e8-425a-4a56-91de-06f737076ba5.jpg",
      title: "Оформление наград",
      description: "Объемная рама для медалей"
    },
    {
      image: "https://cdn.poehali.dev/files/fe8791c8-c35f-46b7-80ef-a7c592616362.jpg",
      title: "Семейное фото",
      description: "Креативная галерея на прищепках в золотой раме"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{ backgroundImage: "url('https://cdn.poehali.dev/files/f10f6f99-7a9c-4bc7-a6da-40ce12959391.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Профессиональное <span className="text-accent">багетное оформление</span> в Москве
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Превращаем ваши картины, фотографии и памятные предметы в произведения искусства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <a href="#contacts" className="flex items-center">
                Заказать оформление
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <a href="#gallery">
                Посмотреть работы
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Примеры наших работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О нашей мастерской</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Багетная мастерская "Магия Багета" — это команда профессионалов с многолетним опытом работы в сфере багетного оформления. Мы создаём уникальные рамы, которые подчёркивают красоту и ценность ваших работ.
              </p>
              <p className="text-lg leading-relaxed">
                Наша мастерская оснащена современным оборудованием, позволяющим выполнять работы любой сложности. Мы используем только качественные материалы от проверенных поставщиков и предлагаем широкий выбор багета на любой вкус и бюджет.
              </p>
              <p className="text-lg leading-relaxed">
                Каждый проект для нас уникален. Мы внимательно прислушиваемся к пожеланиям клиентов и предлагаем решения, которые идеально дополнят ваш интерьер и подчеркнут индивидуальность каждой работы.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/b8391ce2-a7dd-4f8c-8dbd-1f8515f43cc6.jpg"
                  alt="Багетная мастерская"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
            <div className="flex justify-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">от 15 минут</div>
                <div className="text-muted-foreground">срочное оформление</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2000+</div>
                <div className="text-muted-foreground">образцов</div>
              </div>
            </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Галерея работ</h2>
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div className="relative h-[500px] md:h-[600px]">
                <img 
                  src={galleryItems[currentSlide].image}
                  alt={galleryItems[currentSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">{galleryItems[currentSlide].title}</h3>
                  <p className="text-white/80 mt-2">{currentSlide + 1} / {galleryItems.length}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Предыдущий слайд"
            >
              <Icon name="ChevronLeft" size={32} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Следующий слайд"
            >
              <Icon name="ChevronRight" size={32} />
            </button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">Краснобогатырская улица, 2 стр 2</p>
                      <p className="text-muted-foreground">Москва, 107066</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+74956474433" className="text-accent hover:underline">+7 (495) 647-44-33</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:bagetnaya-masterskaya@ya.ru" className="text-accent hover:underline break-all">
                        bagetnaya-masterskaya@ya.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Clock" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur overflow-hidden">
              <CardContent className="p-0 h-full">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f8c13fc9c62fb5ec9a71ea854d5eaeae6c0af5e01a75f0cb9f1e5dca10bc8b1&amp;source=constructor" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="min-h-[400px]"
                  title="Карта местоположения"
                ></iframe>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Мы в социальных сетях:</p>
            <div className="flex justify-center gap-6">
              <Link to="#" className="bg-accent/10 hover:bg-accent/20 p-4 rounded-full transition-colors">
                <Icon name="Instagram" className="text-accent" size={28} />
              </Link>
              <Link to="#" className="bg-accent/10 hover:bg-accent/20 p-4 rounded-full transition-colors">
                <Icon name="Facebook" className="text-accent" size={28} />
              </Link>
              <Link to="#" className="bg-accent/10 hover:bg-accent/20 p-4 rounded-full transition-colors">
                <Icon name="MessageCircle" className="text-accent" size={28} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 Магия Багета. Все права защищены.</p>
          <p className="text-sm text-white/70">Профессиональное багетное оформление в Москве</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
