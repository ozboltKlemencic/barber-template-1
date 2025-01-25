'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children?: ReactNode;
}

export function MaskAnimation({children,}:Props) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const containerVariants = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    initial: { 
      y: "100%",
      opacity: 0
    },
    enter: { 
      y: "0",
      opacity: 1,
      transition: { 
        duration: 0.75, 
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return(
    <div ref={ref}>
      <motion.div 
        className="overflow-hidden"
        variants={containerVariants}
        initial="initial"
        animate={inView ? "enter" : "initial"}
      >
        <motion.div 
          className='text-neutral-200'
          variants={childVariants}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}