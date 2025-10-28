import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Оформление картин",
    description: "Профессиональное багетное оформление живописи любого размера и стиля",
    icon: "Frame"
  },
  {
    title: "Оформление фотографий",
    description: "Индивидуальный подход к каждой фотографии — от семейных до художественных снимков",
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

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur border-accent/20">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
