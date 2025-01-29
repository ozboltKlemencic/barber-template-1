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
      <div className='h-auto overflow-hidden'>
        <motion.div style={{y}} className='relative h-[calc(100dvh_-48px)] md:h-[calc(100vh_-48px)] mt-12 min-h-[600px] md:max-h-[1100px]'>
          <Carousel/>
        </motion.div>
      </div>
    )
}