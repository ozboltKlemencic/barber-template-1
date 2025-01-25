"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
  scaleFrom?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimateInViewWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  className = '',
  duration = 0.5,
  distance = 20,
  scaleFrom = 0.9,
  direction = 'up'
}) => {
  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...directionMap[direction],
      scale: scaleFrom 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0, 
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(AnimateInViewWrapper);