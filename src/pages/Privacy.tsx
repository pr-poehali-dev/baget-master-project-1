import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Privacy = () => {
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
        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm">Дата последнего обновления: 28 октября 2024 г.</p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта багетной мастерской ИП Лукинский Антон Эдуардович (ОГРНИП 323508100708727).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Какие данные мы собираем</h2>
            <p className="mb-2">При использовании нашего сайта и услуг мы можем собирать следующие данные:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информация о заказах и предпочтениях</li>
              <li>Технические данные (IP-адрес, тип браузера, операционная система)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Цели обработки данных</h2>
            <p className="mb-2">Мы используем ваши персональные данные для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Обработки заказов и предоставления услуг</li>
              <li>Связи с вами по вопросам заказа</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования о новых услугах и акциях (с вашего согласия)</li>
              <li>Выполнения законодательных требований</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Защита данных</h2>
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты ваших персональных данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Передача данных третьим лицам</h2>
            <p>
              Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, 
              когда это необходимо для выполнения наших обязательств перед вами или требуется по закону.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ваши права</h2>
            <p className="mb-2">Вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию о обработке ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или удаления данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие оператора</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Файлы cookies</h2>
            <p>
              Наш сайт может использовать файлы cookies для улучшения функциональности и анализа посещаемости. 
              Вы можете настроить ваш браузер для отклонения cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Контакты</h2>
            <p>
              По всем вопросам, касающимся обработки персональных данных, вы можете обратиться к нам:
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li>Адрес: г. Мытищи, Олимпийский проспект 15, корпус 16</li>
              <li>Телефон: +7 (965) 331-12-28</li>
              <li>Email: info@baget.ru</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Изменения в политике</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Все изменения вступают в силу с момента их публикации на сайте.
            </p>
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

export default Privacy;