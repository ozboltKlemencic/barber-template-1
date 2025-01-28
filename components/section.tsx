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
    const container = useRef<HTMLDivElement>(null);;
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center  h-[1100px] md:h-[80vh] md:min-h-[800px] overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >   
            <div className='absolute top-0 left-0 right-0 z-50  h-full flex justify-center items-center py-20'>
                <div className='max-w-7xl flex justify-center flex-col md:flex-row items-center gap-x-12 px-4 md:px-16 gap-y-16'>

                    
                    <div className=' w-auto max-w-full md:max-w-[45%] h-auto mx-4 flex items-center  md:items-start justify-center flex-col gap-y-2 gap-x-2 '>
                        <MaskAnimation>
                            <h3 className='font-montserrat text-md text-neutral-200'>Kontakt</h3>
                        </MaskAnimation>
                        <MaskAnimation>
                            <h2 className='font-teko text-3xl lg:text-4xl font-bold text-neutral-50'>
                                Stopite v Stik z&nbsp; 
                                <BgFrombottomToTop text="nami"/>
                            </h2>
                        </MaskAnimation>
                        <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                            <p className='font-montserrat text-md text-neutral-200 text-center md:text-left w-full mb-4'>
                            Imate vprašanje, želite več informacij ali se želite dogovoriti za termin? Z veseljem vam bomo pomagali! Naša ekipa je tukaj, da vam ponudi podporo in odgovore na vsa vaša vprašanja. Pišite nam, pokličite nas ali nas obiščite osebno.
                            </p>
                        </AnimateInViewWrapper> 
                        <MaskAnimation >
                            <Primary text='Pošlji sporočilo' link='' w='200px' h='60px'/>
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