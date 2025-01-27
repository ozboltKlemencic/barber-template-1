import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Carousel from './carosel';

export default function CaroselContainer() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{y}} className='relative h-full'>
          <Carousel/>
        </motion.div>
      </div>
    )
}