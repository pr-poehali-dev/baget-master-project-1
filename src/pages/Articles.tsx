import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Articles = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const articles = [
    {
      title: "Как выбрать багет для картины",
      description: "Подробное руководство по выбору правильного багета в зависимости от стиля картины, интерьера и ваших предпочтений",
      icon: "Frame",
      content: [
        "Выбор багета — это искусство, которое требует понимания основных принципов сочетания цветов, стилей и материалов.",
        "Для классических картин подойдут широкие деревянные рамы с резьбой и позолотой.",
        "Современные работы лучше смотрятся в минималистичных алюминиевых или тонких деревянных рамах.",
        "Учитывайте цветовую гамму картины — багет должен дополнять, а не конкурировать с произведением."
      ]
    },
    {
      title: "Паспарту: зачем оно нужно",
      description: "Узнайте о роли паспарту в оформлении и как правильно подобрать его размер и цвет",
      icon: "Maximize",
      content: [
        "Паспарту — это картонная рамка между изображением и багетом, которая выполняет несколько важных функций.",
        "Защищает работу от соприкосновения со стеклом, предотвращая появление плесени и конденсата.",
        "Визуально выделяет изображение, создавая 'воздух' вокруг него.",
        "Ширина паспарту обычно составляет от 5 до 15 см в зависимости от размера работы.",
        "Для небольших работ (до 30х40 см) рекомендуется паспарту 5-7 см, для крупных — 10-15 см."
      ]
    },
    {
      title: "Виды стекла для оформления",
      description: "Обычное, антибликовое, музейное — разбираемся в типах стекла и их особенностях",
      icon: "Square",
      content: [
        "Обычное стекло — базовый вариант, подходит для большинства работ в жилых помещениях.",
        "Антибликовое стекло имеет матовую поверхность, которая рассеивает свет и устраняет блики. Идеально для помещений с ярким освещением.",
        "Музейное стекло — премиальный вариант с UV-фильтром, который защищает работу от выцветания. Прозрачное, без бликов, сохраняет яркость цветов десятилетиями.",
        "Для ценных работ, вышивок и акварелей рекомендуем музейное стекло."
      ]
    },
    {
      title: "Оформление вышивки: особенности",
      description: "Специфика оформления вышивок крестом, гладью и бисером — от натяжки до выбора материалов",
      icon: "Scissors",
      content: [
        "Вышивка требует особого подхода к оформлению из-за объёмности и деликатности материала.",
        "Правильная натяжка — ключевой момент. Ткань должна быть идеально ровной, без морщин и перекосов.",
        "Используем специальный картон или планшет для натяжки, который не деформируется со временем.",
        "Обязательно оставляем воздушный зазор между вышивкой и стеклом с помощью паспарту или подрамника.",
        "Рекомендуем двойное паспарту для вышивок — это создаёт дополнительную глубину и защиту."
      ]
    },
    {
      title: "Уход за оформленными работами",
      description: "Как правильно ухаживать за картинами в багете, чтобы они радовали вас долгие годы",
      icon: "Sparkles",
      content: [
        "Избегайте прямых солнечных лучей — они приводят к выцветанию красок и пожелтению бумаги.",
        "Регулярно протирайте стекло мягкой тканью без абразивов. Используйте специальные средства для стекла.",
        "Не размещайте работы вблизи источников тепла и влаги (батареи, кухня, ванная).",
        "Оптимальная температура хранения — 18-22°C, влажность — 50-60%.",
        "При появлении конденсата под стеклом немедленно обратитесь к специалисту — это признак нарушения герметичности."
      ]
    },
    {
      title: "Оформление икон: традиции и современность",
      description: "Особенности оформления православных икон с соблюдением канонов",
      icon: "Church",
      content: [
        "Оформление икон имеет свои строгие каноны, которые мы соблюдаем в нашей мастерской.",
        "Традиционно используются деревянные рамы с резным орнаментом и позолотой.",
        "Киот (застеклённая рама) защищает икону от пыли, влаги и механических повреждений.",
        "Современный подход допускает более простые формы рам, но обязательно с соблюдением благоговейного отношения.",
        "Для старинных икон рекомендуем консервацию и музейное оформление с UV-защитой."
      ]
    },
    {
      title: "Защитные лаки для картин и живописи",
      description: "Всё о защитных покрытиях для масляной живописи, акрила, пастели и других техник",
      icon: "ShieldCheck",
      content: [
        "Защитный лак — это финишное покрытие, которое оберегает живопись от пыли, влаги, UV-лучей и механических повреждений.",
        "Для масляной живописи используют матовые и глянцевые лаки на основе даммарной смолы или акриловые составы. Наносятся через 6-12 месяцев после завершения работы, когда краска полностью высохнет.",
        "Для картин, написанных акрилом, подходят специальные акриловые лаки. Они быстро сохнут, не желтеют и создают прочное защитное покрытие. Можно наносить уже через неделю после завершения работы.",
        "Пастель требует особого подхода — используются специальные фиксативы в виде аэрозолей, которые закрепляют хрупкий пигмент, не изменяя его текстуру и цвет.",
        "В багетной мастерской «Магия Багета» всегда в наличии все виды защитных лаков: матовые, полуматовые, глянцевые, в аэрозольных баллонах и для нанесения кистью.",
        "Мы поможем подобрать оптимальный лак для вашей работы и профессионально нанесём его, обеспечив равномерное покрытие без разводов и пятен."
      ]
    },
    {
      title: "Креативное оформление: объемные предметы и нестандартные решения",
      description: "Оформление футболок, сувениров, медалей и других необычных объектов — ограничены только вашей фантазией",
      icon: "Lightbulb",
      content: [
        "В нашей багетной мастерской мы не ограничиваемся традиционным оформлением картин и вышивок. Мы готовы воплотить в жизнь самые смелые и креативные идеи наших клиентов.",
        "Спортивная атрибутика: футболки с автографами любимых спортсменов, кроссовки, перчатки, шарфы болельщиков — всё это можно красиво оформить в раму и превратить в стильный элемент интерьера.",
        "Коллекции и награды: медали, кубки, значки, ордена — создаём объемное оформление с использованием специальных глубоких рам и креплений. Ваши достижения заслуживают достойной презентации.",
        "Памятные сувениры: билеты с концертов, открытки, сувениры из путешествий, детские рисунки, первые башмачки малыша — оформляем любые предметы, которые дороги вашему сердцу.",
        "Нестандартные материалы: кружево, ткани, вееры, музыкальные инструменты, виниловые пластинки, часы — если это имеет для вас ценность, мы найдём способ это красиво оформить.",
        "Объемные композиции: используем специальные глубокие рамы (до 10 см глубиной), монтажные системы, подвесы и крепления для надёжной фиксации объемных предметов.",
        "Всё ограничивается только вашей фантазией и пожеланиями! Приходите с любой идеей — мы воплотим даже самые незаурядные проекты. Каждая работа уникальна, и мы подходим к каждому заказу индивидуально."
      ]
    },
    {
      title: "Реставрационные материалы: бережное сохранение ценных работ",
      description: "Специальные клеи, бумага и материалы для работы с антикварными и историческими объектами",
      icon: "Archive",
      content: [
        "В багетной мастерской «Магия Багета» мы понимаем, насколько важно сохранить не только внешний вид, но и историческую ценность доверенных нам объектов.",
        "Для старинных документов, фотографий и произведений искусства мы используем только специализированные архивные материалы, которые не содержат кислот и не вызывают деградацию материалов со временем.",
        "Реставрационные клеи: применяем обратимые клеящие составы на основе метилцеллюлозы и рисового крахмала. Эти клеи не оставляют следов, легко удаляются при необходимости и не повреждают бумагу даже спустя десятилетия.",
        "Архивная бумага и картон: используем бескислотные материалы музейного качества для паспарту и подложек. Они имеют нейтральный pH и содержат карбонат кальция, который нейтрализует кислоты из окружающей среды.",
        "Консервационные материалы: для фиксации хрупких элементов применяем японскую бумагу васи и специальные монтажные уголки, которые не требуют прямого контакта клея с объектом.",
        "Каждый исторический объект требует индивидуального подхода. Мы консультируемся с владельцами и подбираем методы оформления, которые максимально сохранят оригинальность и ценность работы.",
        "Ваши семейные реликвии, старинные фотографии, документы и антикварные произведения искусства в надёжных руках — мы используем только проверенные музейные технологии консервации и оформления."
      ]
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
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/40a4138e-6e31-4536-a1e6-cbdf5428848d.png" 
              alt="Магия Багета" 
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-red-700 text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Магия Багета</h1>
              <p className="text-sm text-muted-foreground mx-9">Багетная мастерская</p>
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/#services" className="hover:text-accent transition-colors text-red-900 font-medium">Услуги</Link>
            <Link to="/#works" className="hover:text-accent transition-colors text-red-900 font-medium">Примеры работ</Link>
            <Link to="/#gallery" className="hover:text-accent transition-colors text-red-900 font-medium">Галерея</Link>
            <Link to="/articles" className="hover:text-accent transition-colors text-red-900 font-medium border-b-2 border-red-700">Про оформление</Link>
            <Link to="/#about" className="hover:text-accent transition-colors text-red-900 font-medium">О нас</Link>
            <Link to="/#contacts" className="hover:text-accent transition-colors text-red-900 font-medium">Контакты</Link>
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
              <Link to="/#services" className="text-red-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
              <Link to="/#works" className="text-red-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Примеры работ</Link>
              <Link to="/#gallery" className="text-red-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Галерея</Link>
              <Link to="/articles" className="text-red-900 font-medium border-b-2 border-red-700 pb-1" onClick={() => setMobileMenuOpen(false)}>Про оформление</Link>
              <Link to="/#about" className="text-red-900 font-medium" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
              <Link to="/#contacts" className="text-red-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-red-700 mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Про оформление
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полезные статьи о багетном оформлении — выбор материалов, уход за работами и профессиональные советы
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name={article.icon} className="text-red-700" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-red-900">{article.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <div className="space-y-3 text-sm text-gray-700">
                  {article.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-red-50/90 backdrop-blur border-red-200">
            <CardContent className="p-8">
              <Icon name="MessageCircle" className="mx-auto mb-4 text-red-700" size={48} />
              <h3 className="text-2xl font-semibold text-red-900 mb-3">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-6">
                Наши специалисты с радостью проконсультируют вас по всем вопросам оформления
              </p>
              <Link to="/#contact">
                <Button className="bg-red-700 hover:bg-red-800">
                  Связаться с нами
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-cover bg-center relative mt-16" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/9a76ae31-5621-4f8a-ba52-894a9af11a38.jpg')" }}>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-red-900">Магия Багета</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональное багетное оформление в Москве и Московской области с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-red-900">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-red-700" />
                  <a href="tel:+79653311228" className="hover:text-accent transition-colors">+7 (965) 331-12-28</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-red-700" />
                  <a href="mailto:aktok@mail.ru" className="hover:text-accent transition-colors">aktok@mail.ru</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-red-700" />
                  <span>г. Мытищи, Олимпийский проспект 15, корпус 16</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-red-900">Информация</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/privacy" className="hover:text-accent transition-colors text-red-800">Политика конфиденциальности</Link>
                <Link to="/terms" className="hover:text-accent transition-colors text-red-800">Условия использования</Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Магия Багета. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Articles;