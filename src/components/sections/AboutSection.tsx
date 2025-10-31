const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-red-900" style={{ fontFamily: "'Great Vibes', cursive" }}>
          О нас
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-zinc-800">
            <p className="leading-relaxed">
              <span className="font-semibold text-red-900">Магия Багета</span> — это багетная мастерская с многолетним опытом работы. 
              Мы превращаем ваши картины, вышивки, фотографии и зеркала в настоящие произведения искусства.
            </p>
            <p className="leading-relaxed">Большой ассортимент (более 2000 образцов) деревянного и пластикового багета на любой вкус и бюджет, поможет воплотить  в жизнь любые ваши идеи. Учтём все ваши пожелания и особенности работы, детали интерьера и прочие моменты, с радостью поможем в подборе оформления, а так же проконсультируем по вопросам сопутствующих материалов необходимых для художественного оформления.</p>
            <p className="leading-relaxed">
              Мы гордимся короткими сроками выполнения заказов и честными ценами. 
              Каждая работа выполняется с любовью и вниманием к деталям.
            </p>
            <p className="leading-relaxed font-semibold text-red-900">
              Доверьте нам своё искусство — мы знаем, как подчеркнуть его красоту!
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/a9811cd4-213c-4c49-a6cf-bbeecc2800fe.jpg" 
              alt="Багетная мастерская Магия Багета"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;