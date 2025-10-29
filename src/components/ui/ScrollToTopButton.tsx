import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollTop } from "@/hooks/useScrollTop";

const ScrollToTopButton = () => {
  const { showScrollTop, scrollToTop } = useScrollTop();

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 text-white animate-scale-in hover:scale-110"
      aria-label="Прокрутить наверх"
    >
      <Icon name="ArrowUp" size={28} />
    </Button>
  );
};

export default ScrollToTopButton;