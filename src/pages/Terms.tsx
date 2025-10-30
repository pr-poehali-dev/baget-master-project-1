import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Terms = () => {
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
        <h1 className="text-4xl font-bold mb-8">Пользовательское соглашение</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm">Дата последнего обновления: 28 октября 2024 г.</p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие условия</h2>
            <p>
              Настоящее Пользовательское соглашение регулирует отношения между ИП Лукинский Антон Эдуардович 
              (ОГРНИП 323508100708727) и пользователями сайта багетной мастерской. 
              Используя наш сайт и услуги, вы соглашаетесь с условиями данного соглашения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Услуги</h2>
            <p className="mb-2">Багетная мастерская предоставляет следующие услуги:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Оформление картин, фотографий и зеркал</li>
              <li>Оформление объемных предметов</li>
              <li>Оформление вышивок и алмазных мозаик</li>
              <li>Оформление икон</li>
              <li>Оформление рисунков (акварель, пастель, графика)</li>
              <li>Консультации по выбору багета и оформлению</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Заказ услуг</h2>
            <p className="mb-2">При оформлении заказа:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Заказчик предоставляет точную информацию о требуемых услугах</li>
              <li>Стоимость услуг согласовывается индивидуально</li>
              <li>Сроки выполнения работ указываются при оформлении заказа</li>
              <li>При оформлении заказа требуется предоплата от 50%</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Оплата</h2>
            <p className="mb-2">Оплата услуг производится:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Наличными в мастерской</li>
              <li>Банковской картой</li>
              <li>Безналичным переводом (по согласованию)</li>
            </ul>
            <p className="mt-4">
              При получении заказа выдается кассовый чек или товарный чек с указанием всех реквизитов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ответственность сторон</h2>
            <p className="mb-2">Мастерская обязуется:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Выполнить работы в согласованные сроки</li>
              <li>Обеспечить качество предоставляемых услуг</li>
              <li>Бережно обращаться с предметами заказчика</li>
            </ul>
            <p className="mt-4 mb-2">Заказчик обязуется:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставить полную информацию о пожеланиях к работе</li>
              <li>Своевременно оплатить услуги</li>
              <li>Забрать заказ в согласованный срок</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Гарантии</h2>
            <p>
              На выполненные работы предоставляется гарантия 12 месяцев с момента выдачи заказа. 
              Гарантия распространяется на качество рамы и монтажа при условии соблюдения правил эксплуатации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Возврат и обмен</h2>
            <p>
              Готовые работы обмену и возврату не подлежат в соответствии с Постановлением Правительства РФ № 2463. 
              В случае обнаружения брака работа будет переделана за счет мастерской.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Доставка</h2>
            <p>
              При организации доставки с использованием сервисов Яндекс Go или иных курьерских служб 
              багетная мастерская не несет ответственности за сохранность изделий и работ, 
              а также за несоблюдение графика и сроков доставки заказов. Ответственность за доставку 
              в таких случаях несет привлеченная служба доставки.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Хранение работ</h2>
            <p>
              Готовые работы хранятся в мастерской бесплатно в течение 30 дней. 
              После истечения этого срока может взиматься плата за хранение в размере 50 рублей в день.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Форс-мажор</h2>
            <p>
              Стороны освобождаются от ответственности за невыполнение обязательств, 
              вызванное обстоятельствами непреодолимой силы (пожар, наводнение, военные действия и т.п.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Разрешение споров</h2>
            <p>
              Все споры и разногласия решаются путем переговоров. 
              При невозможности достижения согласия спор передается в суд в соответствии с законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Контактная информация</h2>
            <ul className="list-none pl-0 space-y-1">
              <li>Адрес: г. Мытищи, Олимпийский проспект 15, корпус 16</li>
              <li>Телефон: +7 (965) 331-12-28</li>
              <li>Email: aktok@mail.ru</li>
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

export default Terms;