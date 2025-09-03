"use client";
import { motion } from "motion/react";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }} 
    >
      {children}
    </motion.div>
  );
}
