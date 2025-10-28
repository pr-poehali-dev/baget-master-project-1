import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
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
  );
};
