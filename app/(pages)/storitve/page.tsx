'use client'

import Navbar from "@/components/navigation/navbar"
import TabService from "@/components/TabService"
import { MaskAnimation } from "@/components/text/MaskAnimation"

import AnimateInViewWrapper from "@/components/animation/fade";
import BgFrombottomToTop from "@/components/text/bgFrombottomToTop";
import Footer from "@/components/navigation/footer";

export default function ServicePage() {
 
  return(
    <div>
      <Navbar/>
      
      <div className="w-screen h-auto  ">
          <div className="h-auto flex flex-col mx-auto w-[92vw] md:w-full max-w-7xl px-2 md:px-16 py-32 gap-y-1">
          <div className="mb-4 md:mb-16">
              <MaskAnimation>
                <h2 className="text-neutral-50 font-teko font-semibold text-4xl  md:text-5xl mb-2">
                Kjer natančnost sreča&nbsp;<BgFrombottomToTop text="eleganco"/>
                </h2>
              </MaskAnimation>
              <AnimateInViewWrapper scaleFrom={1} delay={0.3}>
                  <p className='font-montserrat text-base text-neutral-200 max-w-5xl  mobile:w-full'>
                    Vsak rez, vsako britje in vsaka podrobnost so del umetnosti. Pri nas dobite več kot le frizuro – dobite unikatno izkušnjo, ki poudari vaš karakter in stil.
                  </p>
              </AnimateInViewWrapper> 
            </div>
            <TabService/>
          </div>
      </div>

      <Footer/>
    </div>
  )
}