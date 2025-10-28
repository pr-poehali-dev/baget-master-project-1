import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/bab79114-4408-427d-809c-46f7a40a2dac.jpg",
      title: "Семейное фото",
      description: "Современная черная рама"
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
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center text-red-900">Магия и искусство оформления</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-zinc-900">Превращаем ваши картины, вышивки, алмазные мозаики, фотографии и зеркала в произведения искусства. 
Самый большой выбор багета. Самые короткие сроки оформления. Самые честные цены.</p>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">Наши услуги</h2>
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

      <section id="works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-2">Примеры оформления</h2>
            <p className="text-sm text-muted-foreground italic">*еще больше примеров работ в нашей <a href="https://vk.com/magbaget" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">группе Vk</a></p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
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
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О мастерской</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>Наша багетная мастерская — это место, где искусство и творчество встречается с мастерством. Из огромного ассортимента деревянного, пластикового багета и сопутствующих материалов мы подбираем варианты оформления, учитывая ваши пожелания и особенности работы.</p>
              <p className="text-muted-foreground">
                С 2010 года мы помогаем клиентам сохранить и представить их ценные работы 
                в самом выгодном свете. Используем только качественные материалы и проверенные временем техники.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/b8391ce2-a7dd-4f8c-8dbd-1f8515f43cc6.jpg"
                alt="Багетная мастерская"
                className="w-full h-full object-cover"
              />
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
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Галерея работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/32a3e740-baff-4e7d-b69d-cc8612a02bd4.jpg"
                alt="Вышивка в классическом багете"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Классическое оформление</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/922ff82a-fcc9-446d-a3bb-0b2653423f24.jpg"
                alt="Оформленная работа 2"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Современный стиль</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/files/b8391ce2-a7dd-4f8c-8dbd-1f8515f43cc6.jpg"
                alt="Оформленная работа 3"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Индивидуальные решения</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/ad9f4878-4d43-4868-8384-84633ac56109.jpg"
                alt="Оформленная работа 4"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Музейное качество</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/922ff82a-fcc9-446d-a3bb-0b2653423f24.jpg"
                alt="Оформленная работа 5"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Минималистичное оформление</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://cdn.poehali.dev/files/b8391ce2-a7dd-4f8c-8dbd-1f8515f43cc6.jpg"
                alt="Оформленная работа 6"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Эксклюзивные багеты</p>
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

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-12">Готовы обсудить ваш проект? Хотите рассчитать примерную стоимость оформления? Или у вас есть пример оформления работы? Позвоните или напишите нам, мы с радостью ответим на все ваши вопросы.</p>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Icon name="Phone" size={24} className="text-accent" />
              <a href="tel:+79653311228" className="text-xl hover:text-accent transition-colors">
                +7 (965) 331-12-28
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Icon name="Mail" size={24} className="text-accent" />
              <a href="mailto:aktok@mail.ru" className="text-xl hover:text-accent transition-colors">
                aktok@mail.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Icon name="MapPin" size={24} className="text-accent" />
              <span className="text-xl">г. Мытищи, Олимпийский проспект 15, корпус 16</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={24} className="text-accent" />
                <div className="text-xl">
                  <div>Пн-Пт: 10:00-19:00</div>
                  <div>Сб: 10:00-18:00</div>
                  <div>Вс: выходной</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                * В праздничные дни режим работы может быть изменён
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-6">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.756597%2C55.921450&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjgyNzY3MRJt0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JzRi9GC0LjRidC4LCDQntC70LjQvNC_0LjQudGB0LrQuNC5INC_0YDQvtGB0L_QtdC60YIsIDE1IgoNODPeQRWO2FlC&z=17" 
                width="100%" 
                height="400" 
                frameBorder="0"
                title="Карта проезда"
                className="border-0"
              />
            </div>
            <a 
              href="https://yandex.ru/maps/?rtext=~55.921450,37.756597" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Icon name="Navigation" size={20} />
              Построить маршрут в Яндекс.Картах
            </a>
          </div>
        </div>
      </section>

      <a 
        href="https://wa.me/79653311228" 
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
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <Link to="/privacy" className="hover:text-accent transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors text-sm">
              Пользовательское соглашение
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
            <p className="mb-2">© 2025 "Магия Багета". Все права защищены.</p>
            <p>ИП Лукинский Антон Эдуардович ОГРНИП 323508100708727</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;