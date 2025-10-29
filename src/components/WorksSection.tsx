import { Card, CardContent } from "@/components/ui/card";

const WorksSection = () => {
  const gallery = [
    {
      image: "https://cdn.poehali.dev/files/83124a0d-6ab1-46bd-a646-feac8b40dc20.jpg",
      title: "Оформление картин",
      description: "Багет в стиле барокко"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/10081c46-9ed8-4b99-bf50-29e4b0ff29a3.jpg",
      title: "Современная фотография",
      description: "Минималистичная рама"
    },
    {
      image: "https://cdn.poehali.dev/files/fc3e0aa4-7f72-420b-b007-8c2b6e5cebd9.jpeg",
      title: "Декоративное зеркало",
      description: "Изготовление и оформление зеркал"
    },
    {
      image: "https://cdn.poehali.dev/files/8e49e163-c6de-4fb6-bdab-e39b5f8f2ed7.jpg",
      title: "Вышивка крестом",
      description: "Элегантная деревянная рама. Двойное бархатное паспарту. Музейное стекло."
    },
    {
      image: "https://cdn.poehali.dev/files/ec5782d5-84d8-4e2e-9ec4-78c281f94109.jpg",
      title: "Православная икона",
      description: "Традиционное оформление с орнаментом"
    },
    {
      image: "https://cdn.poehali.dev/files/d561e231-8dd5-43c5-9388-07ee12f21a2e.jpg",
      title: "Акварельный рисунок",
      description: "Светлая минималистическая рамка с паспарту"
    },
    {
      image: "https://cdn.poehali.dev/projects/443fbb86-47b1-4a70-9c17-62afaf04e5ae/files/f083b4e8-425a-4a56-91de-06f737076ba5.jpg",
      title: "Оформление наград",
      description: "Объемная рама для медалей"
    },
    {
      image: "https://cdn.poehali.dev/files/fe8791c8-c35f-46b7-80ef-a7c592616362.jpg",
      title: "Семейное фото",
      description: "Креативная галерея на прищепках в золотой раме"
    }
  ];

  return (
    <section id="works" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Примеры работ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gallery.map((item, index) => (
            <Card key={index} className="overflow-hidden border-2 border-red-100 hover:border-red-300 transition-all hover:shadow-xl bg-white">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-red-900">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
