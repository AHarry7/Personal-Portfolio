import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreenp: { x: 300, rotate: -80, opacity: 0 },
  offscreen: {
    x: -300,
    rotate: -80,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

export { cardVariants, motion };
