import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/ea8c84e0-dc59-47be-9fc8-47aed1c4c54a.jpg",
      title: "Классическая живопись",
      description: "Багет в стиле барокко"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/10081c46-9ed8-4b99-bf50-29e4b0ff29a3.jpg",
      title: "Современная фотография",
      description: "Минималистичная рама"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/6c932cd3-0806-4689-8239-e8bb83ca7bf0.jpg",
      title: "Декоративное зеркало",
      description: "Резная деревянная рама"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/40a4138e-6e31-4536-a1e6-cbdf5428848d.png" 
              alt="Магия Багета" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold">Багетная мастерская</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Примеры работ</a>
            <a href="#about" className="hover:text-accent transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Искусство<br />оформления
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Превращаем ваши картины, вышивки, алмазные мозаики, фотографии и зеркала в произведения искусства
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Заказать консультацию
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Примеры оформления</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О мастерской</h2>
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <p>
              Наша багетная мастерская — это место, где искусство встречается с мастерством. 
              Мы создаем индивидуальные рамы, которые подчеркивают уникальность каждого произведения.
            </p>
            <p className="text-muted-foreground">
              С 2010 года мы помогаем клиентам сохранить и представить их ценные работы 
              в самом выгодном свете. Используем только качественные материалы и проверенные временем техники.
            </p>
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
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Отличная работа! Оформили семейную фотографию в багет за 30 минут. 
                  Качество превосходное, рама идеально подобрана под интерьер."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Анна Петрова</div>
                    <div className="text-sm text-muted-foreground">Москва</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Профессиональный подход к каждой детали. Мастера помогли выбрать 
                  идеальный багет для моей картины. Результат превзошёл ожидания!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий Соколов</div>
                    <div className="text-sm text-muted-foreground">Москва</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Огромный выбор багета! Нашли именно то, что искали для антикварного зеркала. 
                  Работа выполнена безупречно, очень довольны!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Елена Волкова</div>
                    <div className="text-sm text-muted-foreground">Москва</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">До и после</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4 animate-fade-in">
              <div className="relative group">
                <img 
                  src="https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/ea8c84e0-dc59-47be-9fc8-47aed1c4c54a.jpg"
                  alt="После оформления"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                  После
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Классическая живопись в элегантном багете
              </p>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="relative group">
                <img 
                  src="https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/10081c46-9ed8-4b99-bf50-29e4b0ff29a3.jpg"
                  alt="После оформления"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                  После
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Современная фотография в минималистичной раме
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Icon name="Phone" size={24} className="text-accent" />
              <a href="tel:+79991234567" className="text-xl hover:text-accent transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Icon name="Mail" size={24} className="text-accent" />
              <a href="mailto:info@baget.ru" className="text-xl hover:text-accent transition-colors">
                info@baget.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Icon name="MapPin" size={24} className="text-accent" />
              <span className="text-xl">г. Москва, ул. Художественная, 12</span>
            </div>
          </div>
          <Button size="lg" className="mt-12 text-lg px-8 py-6">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <a 
        href="https://wa.me/79991234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Написать в WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Багетная мастерская</h3>
          <p className="text-primary-foreground/80 mb-6">
            Искусство в каждой детали
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
            © 2024 Багетная мастерская. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;