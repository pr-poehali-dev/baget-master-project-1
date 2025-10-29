import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "Оформление картин",
      description: "Профессиональное багетное оформление живописи любого размера и стиля",
      icon: "Frame"
    },
    {
      title: "Оформление фотографий",
      description: "Печать на холсте или бумаге, профессиональная ретушь, нанесение геля для имитации живописи. Индивидуальный подход к каждой фотографии — от семейных до художественных снимков",
      icon: "Camera"
    },
    {
      title: "Оформление зеркал",
      description: "Эксклюзивные рамы для зеркал, которые станут украшением любого интерьера",
      icon: "Sparkles"
    },
    {
      title: "Оформление объемных предметов",
      description: "Профессиональное оформление медалей, орденов, коллекций и других памятных предметов",
      icon: "Box"
    },
    {
      title: "Оформление вышивок",
      description: "Бережное оформление вышивок крестом, гладью, бисером с учётом всех особенностей работы",
      icon: "Scissors"
    },
    {
      title: "Оформление алмазных мозаик",
      description: "Специальное оформление алмазных мозаик с идеальной натяжкой и защитой от выцветания",
      icon: "Gem"
    },
    {
      title: "Оформление икон",
      description: "Традиционное оформление икон с соблюдением канонов и использованием качественных материалов",
      icon: "Church"
    },
    {
      title: "Оформление рисунков (Акварель, Пастель, Графика и пр.)",
      description: "Профессиональное оформление рисунков любой техники с учётом особенностей материала",
      icon: "Paintbrush"
    }
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Наши услуги
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-red-100 hover:border-red-300 transition-colors bg-white/95 shadow-md">
              <CardContent className="p-6">
                <Icon name={service.icon as any} className="h-12 w-12 mb-4 text-red-700" />
                <h3 className="text-xl font-semibold mb-3 text-red-900">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
