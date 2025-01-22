'use client'
import Footer from "@/components/navigation/footer";
// import Footer from "@/components/Footer2";
import Intro from "@/components/Intro";
import { useEffect } from "react";
import Lenis from 'lenis';
import Navbar from "@/components/navigation/navbar";



import Section from "@/components/section";
import CaroselContainer from "@/components/CaroselContainer";
import { ThreeDCardDemo } from "@/components/cards/card";
import SecondaryBtn from "@/components/buttons/Secondary";
import ShinyText from "@/components/ui/ShinyText";

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Navbar/>
      <CaroselContainer />
      {/* STORITVE */}
      <div className="w-screen bg-black h-auto  ">
        <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 py-32  gap-y-1">
          <div className="pb-10 ">
            <ShinyText text="Storitve" speed={3}/>
          </div>
          <h2 className="text-neutral-50 font-teko font-semibold -mb-16 text-5xl">Poglejte naše frizerske storitve</h2>
          <div className="w-full h-auto flex items-center justify-start gap-x-4 ">
            <ThreeDCardDemo url="/img/haircuts/mid-fade/mid_fade_1.png" title="Mid fade" link="#"/>
            <ThreeDCardDemo url="/img/haircuts/mid-fade/mid_fade_2.png" title="Mid fade" link="#"/>
            <ThreeDCardDemo url="/img/haircuts/burst-fade/burst_fade_1.png" title="Burst fade" link="#"/>
          </div>
          <SecondaryBtn text="Vse storitve" className="-mt-8"/>
        </div>
      </div>

      <Section/>
      <div className="h-screen"></div>
      <div>
        <Intro />
        <Footer />
      </div>
    </>
  );
}