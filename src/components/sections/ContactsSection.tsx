import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-900">Свяжитесь с нами</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Готовы обсудить ваш проект? Хотите рассчитать примерную стоимость оформления? Или у вас есть пример оформления работы? Позвоните или напишите нам, мы с радостью ответим на все ваши вопросы.
        </p>
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
          <div className="mt-8">
            <a 
              href="https://t.me/mag_baget" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0088cc] hover:bg-[#006ba8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Icon name="Send" size={24} />
              Написать в Telegram
            </a>
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
  );
};

export default ContactsSection;
