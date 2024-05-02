"use client";
import { motion } from "framer-motion";

export function FadeInWhenVisible({
  children,
  direction,
  className,
}: {
  children: React.ReactNode;
  direction: "up" | "down" | "right" | "left" | undefined;
  className?: string;
}) {
  const transition = { duration: 0.4, delay: 0, ease: [0.42, 0, 0.58, 1] };

  const variants = {
    undefined: {
      visible: { opacity: 1, scale: 1, transition },
      hidden: { opacity: 0, scale: 0, transition },
    },
    up: {
      visible: { y: 0, opacity: 1, transition },
      hidden: { y: 24, opacity: 0, transition },
    },
    down: {
      visible: { y: 0, opacity: 1, transition },
      hidden: { y: -24, opacity: 0, transition },
    },
    right: {
      visible: { x: 0, opacity: 1, transition },
      hidden: { x: -24, opacity: 0, transition },
    },
    left: {
      visible: { x: 0, opacity: 1, transition },
      hidden: { x: 24, opacity: 0, transition },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={direction ? variants[direction] : variants.undefined}
    >
      {children}
    </motion.div>
  );
}
