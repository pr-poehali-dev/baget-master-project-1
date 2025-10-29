import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollTop } from "@/hooks/useScrollTop";

const ScrollToTopButton = () => {
  const { showScrollTop, scrollToTop } = useScrollTop();

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90"
      aria-label="Прокрутить наверх"
    >
      <Icon name="ArrowUp" size={24} />
    </Button>
  );
};

export default ScrollToTopButton;
