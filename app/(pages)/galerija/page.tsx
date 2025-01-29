import Navbar from '@/components/navigation/navbar'
import GalleryTabs from '@/components/TabsGallery'
import React from 'react'

import { MaskAnimation } from '@/components/text/MaskAnimation';
import AnimateInViewWrapper from "@/components/animation/fade";
import BgFrombottomToTop from '@/components/text/bgFrombottomToTop';

const galerija = () => {
  return (
    <div>
        <Navbar/>
        <div className="w-screen h-auto  ">
            <div className="h-auto flex flex-col mx-auto w-[92vw] md:w-full max-w-7xl px-4 md:px-16 py-32 gap-y-1">
            
            <div className="mb-10">
              <MaskAnimation>
                <h2 className="text-neutral-50 font-teko font-semibold text-4xl  md:text-5xl mb-2">
                  Galerija&nbsp;<BgFrombottomToTop text="slik"/>
                </h2>
              </MaskAnimation>
              <AnimateInViewWrapper scaleFrom={1} delay={0.3}>
                  <p className='font-montserrat text-base text-neutral-200 max-w-5xl  mobile:w-full'>
                  Frizerska umetnost je več kot le striženje – je ustvarjanje videza, ki vam pristaja. Raziščite našo galerijo in odkrijte svoj idealni barber stil!
                  </p>
              </AnimateInViewWrapper> 
            </div>
            <GalleryTabs/>
          </div>
        </div>
    </div>
  )
}

export default galerija