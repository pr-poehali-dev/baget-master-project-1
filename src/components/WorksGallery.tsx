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

export const WorksGallery = () => {
  return (
    <section id="works" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Примеры наших работ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {gallery.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
