const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <h2 className="text-5xl md:text-7xl mb-6 leading-tight text-center text-red-900" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Магия и искусство оформления
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-zinc-900">
          Превращаем ваши картины, вышивки, алмазные мозаики, фотографии и зеркала в произведения искусства. 
          Самый большой выбор багета. Самые короткие сроки оформления. Самые честные цены.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
