import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Профессиональное <span className="text-accent">багетное оформление</span> в Москве
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Превращаем ваши картины, фотографии и памятные предметы в произведения искусства
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <a href="#contacts" className="flex items-center">
              Заказать оформление
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <a href="#gallery">
              Посмотреть работы
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
