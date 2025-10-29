import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl mb-6 text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Воплощаем ваши идеи в реальность
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Багетная мастерская полного цикла. Более 500 видов багета. Консультация специалиста.
        </p>
        <Button 
          size="lg" 
          className="bg-red-700 hover:bg-red-800 text-white shadow-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Получить консультацию
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
