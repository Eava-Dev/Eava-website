"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function FadeIn({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
