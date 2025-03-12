import { useEffect, useState, useCallback } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(toggleVisibility);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsHovered(false);
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 bg-primary text-secondary text-3xl px-3 py-4 rounded-full z-50 transition-transform duration-100 
          ${isHovered ? "animate-bounce" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top"
        role="button"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
