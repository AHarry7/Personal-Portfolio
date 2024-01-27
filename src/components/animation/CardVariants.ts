import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreenp: { visibility: "hidden", rotate: 10, opacity: 0 },
  offscreen: {
    visibility: "hidden",
    rotate: 10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    visibility: "visible",
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
