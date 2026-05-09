import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  enter: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.23, 1, 0.32, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -10,

    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

interface Props {
  children: ReactNode;
}

export default function PageTransition({
  children,
}: Props) {

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"

      // ✅ VERY IMPORTANT
      style={{
        position: 'relative',
        width: '100%',
      }}

      className="relative w-full"

      // ✅ PERFORMANCE FIX
      layout={false}
    >
      {children}
    </motion.div>
  );
}