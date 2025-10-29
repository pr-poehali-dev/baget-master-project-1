import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей сайта "Магия Багета" (далее — Сайт), принадлежащего ИП Лукинскому Антону Эдуардовичу 
                (ОГРНИП 323508100708727).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">2. Собираемая информация</h2>
              <p>Мы можем собирать следующие категории персональных данных:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес доставки (при необходимости)</li>
                <li>Информация о заказах и предпочтениях</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">3. Цели использования информации</h2>
              <p>Собранная информация используется для:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Обработки и выполнения заказов</li>
                <li>Связи с клиентами по вопросам заказов</li>
                <li>Улучшения качества обслуживания</li>
                <li>Информирования о новых услугах и специальных предложениях (с вашего согласия)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">4. Защита данных</h2>
              <p>
                Мы применяем современные технические и организационные меры для защиты ваших персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">5. Передача данных третьим лицам</h2>
              <p>
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев, 
                необходимых для выполнения заказа (например, службам доставки) или требуемых законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">6. Ваши права</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Запросить доступ к своим персональным данным</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления своих данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">7. Контактная информация</h2>
              <p>
                По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
              </p>
              <ul className="list-none space-y-2">
                <li>Телефон: +7 (965) 331-12-28</li>
                <li>WhatsApp: +7 (965) 331-12-28</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-900 mb-4">8. Изменения в политике</h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
                Актуальная версия всегда доступна на данной странице.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Дата последнего обновления: 29 октября 2024 года
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
