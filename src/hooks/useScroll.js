import { useScroll, useSpring, useTransform } from "framer-motion";

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring-based scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,   // ✅ typo fixed
    damping: 30,
    restDelta: 0.001,
  });

  // Optional transform (example: fade out on scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return { scaleX, opacity, scrollYProgress };
};
