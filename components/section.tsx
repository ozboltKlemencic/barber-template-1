import Image from 'next/image';
import Background from '../public/img/hero-carosel/banner_2.png';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import ContactInfo from './cards/contact';
import { MaskAnimation } from './text/MaskAnimation';
import AnimateInViewWrapper from "@/components/animation/fade";
import Primary from './buttons/Primary';
import BgFrombottomToTop from './text/bgFrombottomToTop';

export default function Contact() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center  h-[1100px] md:h-[70vh] overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >   
            <div className='absolute top-0 left-0 right-0 z-50  h-full flex justify-center items-center py-20'>
                <div className='max-w-7xl flex justify-center flex-col md:flex-row items-start gap-x-6 gap-y-16'>

                    
                    <div className=' w-auto max-w-full md:max-w-[50%] h-auto mx-4 flex items-center  md:items-start justify-center flex-col gap-y-2 '>
                        <MaskAnimation>
                            <h3 className='font-montserrat text-md text-neutral-200'>Mnenja strank</h3>
                        </MaskAnimation>
                        <MaskAnimation>
                            <h2 className='font-teko text-3xl font-bold text-neutral-50'>
                                Vaš Stil, Naša&nbsp; 
                                <BgFrombottomToTop text="Strast"/>
                            </h2>
                        </MaskAnimation>
                        <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                            <p className='font-montserrat text-md text-neutral-200 text-center md:text-left w-full mb-4'>
                                Preberite mnenja naših strank. Naše stranke so bistvo vsega, kar počnemo.
                                Njihovo zadovoljstvo je naš največji uspeh in motivacija za nenehno izboljševanje
                                naših storitev. Prepričajte se sami, zakaj nam zaupajo številni zadovoljni uporabniki.
                            </p>
                        </AnimateInViewWrapper> 
                        <MaskAnimation >
                            <Primary text='Pošlji sporočilo' link=''/>
                        </MaskAnimation>
                    </div>
                  
                    <div className='w-auto h-auto mx-4'>
                        <AnimateInViewWrapper >
                            <ContactInfo/>
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
    )
}