export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О нашей мастерской</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Багетная мастерская "Магия Багета" — это команда профессионалов с многолетним опытом работы в сфере багетного оформления. Мы создаём уникальные рамы, которые подчёркивают красоту и ценность ваших работ.
            </p>
            <p className="text-lg leading-relaxed">
              Наша мастерская оснащена современным оборудованием, позволяющим выполнять работы любой сложности. Мы используем только качественные материалы от проверенных поставщиков и предлагаем широкий выбор багета на любой вкус и бюджет.
            </p>
            <p className="text-lg leading-relaxed">
              Каждый проект для нас уникален. Мы внимательно прислушиваемся к пожеланиям клиентов и предлагаем решения, которые идеально дополнят ваш интерьер и подчеркнут индивидуальность каждой работы.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/b8391ce2-a7dd-4f8c-8dbd-1f8515f43cc6.jpg"
                alt="Багетная мастерская"
                className="w-full h-full object-cover"
              />
            </div>
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
  );
};
