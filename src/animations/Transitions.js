// The "Brush Stroke" reveal logic for painting services
export const BrushReveal = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  whileInView: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] }
  },
  viewport: { once: true }
};

// Standard section fade-and-slide for customer-centric flow
export const FadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" }
  },
  viewport: { once: true }
});

// Staggered list animation for the navigation menu
export const StaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};