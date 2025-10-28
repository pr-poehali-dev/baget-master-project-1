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
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Превращаем ваши картины, фотографии и зеркала в произведения искусства
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Заказать консультацию
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
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

      <section id="contacts" className="py-20 px-4">
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