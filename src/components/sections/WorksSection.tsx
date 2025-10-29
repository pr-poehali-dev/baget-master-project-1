import Icon from "@/components/ui/icon";
import { worksGallery } from "@/data/worksGallery";

const WorksSection = () => {
  return (
    <section id="works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-2">Примеры оформления</h2>
          <p className="text-sm text-muted-foreground italic">
            *еще больше примеров работ в нашей <a href="https://vk.com/magbaget" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">группе Vk</a>
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {worksGallery.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in hover:shadow-[0_0_20px_rgba(185,28,28,0.5)] transition-all duration-300 hover:-translate-y-2 rounded-lg p-4 border-2 border-transparent hover:border-red-700"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
