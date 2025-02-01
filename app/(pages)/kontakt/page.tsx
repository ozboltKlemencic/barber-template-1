"use client"

import Image from 'next/image';
import Background from '@/public/img/hero-carosel/banner_2.png';
import { useEffect } from "react";
import Lenis from 'lenis';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import { MaskAnimation } from '@/components/text/MaskAnimation';
import AnimateInViewWrapper from "@/components/animation/fade";

import BgFrombottomToTop from '@/components/text/bgFrombottomToTop';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';
import ShinyText from '@/components/text/ShinyText';
import ROUTES from '@/constants/routes';
import ContactCard from '@/components/cards/contactCard';

export default function ContactPage() {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

    const container = useRef<HTMLDivElement>(null);;
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
      <>
        <Navbar/>
        <div className="w-screen bg-black h-auto  ">
        <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 md:px-16  pt-32  gap-y-1">
          <div>
            <AnimateInViewWrapper  className="w-fit">
              <div className="mb-6 w-fit">
                  <ShinyText link={ROUTES.STORITVE} text="Kontakt"  speed={3}/>
              </div>
            </AnimateInViewWrapper>
          </div>
          <div className="mb-4">
            <MaskAnimation>
              <h2 className="text-neutral-50 font-teko font-semibold text-4xl   md:text-5xl">
                Stopite v stik z&nbsp;<BgFrombottomToTop text="nami"/>
              </h2>
            </MaskAnimation>
            <AnimateInViewWrapper scaleFrom={1} delay={0.3}>
              <p className='font-montserrat text-base text-neutral-200 max-w-5xl  mobile:w-full'>
              Frizerska umetnost je več kot le striženje – je ustvarjanje videza, ki vam pristaja. Raziščite našo galerijo in odkrijte svoj idealni barber stil!
              </p>
            </AnimateInViewWrapper> 
          </div>
        </div>
        </div>
        <div
            ref={container} 
            className='relative flex items-center justify-center  h-[1100px] md:h-[50vh] md:min-h-[700px] overflow-hidden '
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >   
            <div className='absolute top-0 left-0 right-0 z-50  h-full flex justify-center items-center py-20'>
                <div className='h-1/6 w-full absolute top-0 left-0 bg-gradient-to-b from-black to-transparent'></div>
                <div className='h-1/6 w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent'></div>

                <div className='max-w-screen-xl flex-wrap flex justify-center flex-col md:flex-row items-center gap-x-8 px-4 md:px-16 gap-y-16'>
                    <div className=' w-auto max-w-full md:max-w-[45%] h-auto mx-4 flex items-center  md:items-start justify-center flex-col gap-y-2 gap-x-2 '>
                        <AnimateInViewWrapper >
                            <ContactCard/>
                        </AnimateInViewWrapper>
                    </div>

                    <div className=' w-auto max-w-full md:max-w-[45%] h-auto mx-4 flex items-center  md:items-start justify-center flex-col gap-y-2 gap-x-2 '>
                        <AnimateInViewWrapper >
                            <ContactCard/>
                        </AnimateInViewWrapper>
                    </div>
                  
                    <div className='w-auto h-auto mx-4'>
                        <AnimateInViewWrapper >
                            <ContactCard/>
                        </AnimateInViewWrapper>
                    </div>
                </div>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
                    <div className='absolute inset-0 bg-black/[0.5] backdrop-blur-sm'></div>
                </motion.div>
            </div>
        </div>
        <Footer/>
        </>
    )
}