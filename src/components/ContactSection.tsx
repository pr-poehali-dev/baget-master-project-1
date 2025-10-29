import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Контакты
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-red-100 bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-900">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-red-700" />
                  <a href="tel:+79255009966" className="hover:text-red-700 transition-colors">+7 (925) 500-99-66</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-red-700" />
                  <span>Москва, ул. Сходненская, д. 52</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-red-700" />
                  <div>
                    <p>Пн-Сб: 10:00 - 20:00</p>
                    <p>Вс: 11:00 - 18:00</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button 
                    className="bg-red-700 hover:bg-red-800 text-white flex-1"
                    onClick={() => window.open('https://t.me/your_telegram', '_blank')}
                  >
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                    onClick={() => window.open('https://wa.me/79255009966', '_blank')}
                  >
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-red-100 bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-900">Преимущества</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-red-700 mt-0.5" />
                  <span>Более 500 видов багета</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-red-700 mt-0.5" />
                  <span>Бесплатная консультация специалиста</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-red-700 mt-0.5" />
                  <span>Гарантия качества</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-red-700 mt-0.5" />
                  <span>Доставка и установка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-red-700 mt-0.5" />
                  <span>Работаем с 2008 года</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
