import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PaymentDelivery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <Icon name="ArrowLeft" size={20} />
            Назад на главную
          </Button>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Оплата и доставка</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Способы оплаты</h2>
            <p className="mb-4">Мы принимаем следующие способы оплаты:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Наличные в мастерской при оформлении заказа или получении работы</li>
              <li>Банковские карты (Visa, Mastercard, МИР)</li>
              <li>Безналичный перевод по реквизитам (по согласованию)</li>
            </ul>
            <p className="mt-4">
              При оформлении заказа требуется предоплата от 50% от общей стоимости. 
              Оставшаяся сумма оплачивается при получении готовой работы.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Документы об оплате</h2>
            <p>
              При оплате услуг вы получаете кассовый чек или товарный чек с указанием всех реквизитов ИП. 
              По запросу можем предоставить акт выполненных работ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Получение заказа</h2>
            <p className="mb-4">Готовые работы можно получить:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Самовывозом из мастерской по адресу: г. Мытищи, Олимпийский проспект 15, корпус 16</li>
              <li>С доставкой по Москве и области (условия согласовываются индивидуально)</li>
            </ul>
            <p className="mt-4">
              О готовности заказа вас оповестят по указанному при оформлении номеру телефона.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Доставка</h2>
            <p className="mb-4">Стоимость и условия доставки:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Доставка по Мытищам — от 300 рублей</li>
              <li>Доставка по Москве — от 500 рублей</li>
              <li>Доставка в Подмосковье — рассчитывается индивидуально</li>
            </ul>
            <p className="mt-4">
              Точная стоимость доставки зависит от размера и веса работы, а также адреса доставки. 
              Для крупногабаритных работ возможна организация доставки транспортной компанией.
            </p>
            <p className="mt-4 font-semibold text-foreground">
              Важно: при организации доставки с использованием сервисов Яндекс Go или иных курьерских служб 
              багетная мастерская не несет ответственности за сохранность изделий и работ, 
              а также за несоблюдение графика и сроков доставки заказов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Сроки хранения</h2>
            <p>
              Готовые работы хранятся в мастерской бесплатно в течение 30 дней с момента уведомления о готовности. 
              После истечения этого срока взимается плата за хранение в размере 50 рублей в день.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Контакты</h2>
            <p className="mb-4">По всем вопросам оплаты и доставки обращайтесь:</p>
            <ul className="list-none pl-0 space-y-1">
              <li>Телефон: <a href="tel:+79653311228" className="text-foreground hover:text-red-700 transition-colors">+7 (965) 331-12-28</a></li>
              <li>Email: <a href="mailto:aktok@mail.ru" className="text-foreground hover:text-red-700 transition-colors">aktok@mail.ru</a></li>
              <li>Адрес: г. Мытищи, Олимпийский проспект 15, корпус 16</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            ИП Лукинский Антон Эдуардович<br />
            ОГРНИП 323508100708727
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivery;