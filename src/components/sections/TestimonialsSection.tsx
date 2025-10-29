import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Отличная работа! Оформили семейную фотографию в багет за 30 минут. Качество превосходное, рама идеально подобрана под интерьер.",
      author: "Анна Петрова",
      location: "Москва",
      delay: "0s"
    },
    {
      text: "Профессиональный подход к каждой детали. Мастера помогли выбрать идеальный багет для моей картины. Результат превзошёл ожидания!",
      author: "Дмитрий Соколов",
      location: "Москва",
      delay: "0.1s"
    },
    {
      text: "Огромный выбор багета! Нашли именно то, что искали для антикварного зеркала. Работа выполнена безупречно, очень довольны!",
      author: "Елена Волкова",
      location: "Москва",
      delay: "0.2s"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: testimonial.delay }}>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
