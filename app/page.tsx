'use client'

import Footer from "@/components/navigation/footer";
// import Footer from "@/components/Footer2";
import { useEffect } from "react";
import Lenis from 'lenis';
import Navbar from "@/components/navigation/navbar";

import Contact from "@/components/section";
import CaroselContainer from "@/components/CaroselContainer";
import { ThreeDCardDemo } from "@/components/cards/card";
import SecondaryBtn from "@/components/buttons/Secondary";
import ShinyText from "@/components/text/ShinyText";
import BgFrombottomToTop from "@/components/text/bgFrombottomToTop";
import ReviewSection from "@/components/review";
import { MaskAnimation } from "@/components/text/MaskAnimation";
import AnimateInViewWrapper from "@/components/animation/fade";
import TeamCard from "@/components/cards/teamCard";
import HorizontalScrollCarousel from "@/components/horizontalScroll";
import ROUTES from "@/constants/routes";
import { employees } from "@/constants/data";
import { Toaster } from "@/components/ui/toaster"
import { useNavStore } from '@/store/navStore'





const haircutData = [
  {
    id: 1,
    url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
    title: "Mid fade",
    link: ROUTES.STORITVE,
    delay: 0
  },
  {
    id: 2,
    url: "/img/haircuts/mid-fade/mid-fade-2.jpg", 
    title: "Mid fade",
    link: ROUTES.STORITVE,
    delay: 0.2
  },
  {
    id: 3,
    url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
    title: "Burst fade", 
    link: ROUTES.STORITVE,
    delay: 0.4
  }
];


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  const { isNavbarVisible } = useNavStore()
  return (
    <>

      {isNavbarVisible && <Navbar />}
      <CaroselContainer />
      {/* STORITVE */}
      <div className="w-screen bg-black h-auto  ">
        <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 md:px-16  py-32  gap-y-1">
          <div>
            <AnimateInViewWrapper  className="w-fit">
              <div className="mb-6 w-fit">
                  <ShinyText link={ROUTES.STORITVE} text="Storitve"  speed={3}/>
              </div>
            </AnimateInViewWrapper>
          </div>
          <div className="mb-4">
            <MaskAnimation>
              <h2 className="text-neutral-50 font-teko font-semibold text-4xl   md:text-5xl">
                Poglejte naše frizerske&nbsp;<BgFrombottomToTop text="storitve"/>
              </h2>
            </MaskAnimation>
          </div>
          <div className="w-full h-auto flex flex-col md:flex-row items-center flex-wrap  justify-start gap-x-6 gap-y-6 ">
          {haircutData.map((haircut) => (
              <AnimateInViewWrapper 
                key={haircut.id} 
                delay={haircut.delay}
              >
                <ThreeDCardDemo 
                  url={haircut.url} 
                  title={haircut.title} 
                  link={haircut.link}
                />
              </AnimateInViewWrapper>
            ))}
          </div>
          <AnimateInViewWrapper  className="w-fit">
            <SecondaryBtn text="Vse storitve" link={ROUTES.STORITVE}  className="mt-6"/>
          </AnimateInViewWrapper>
        </div>
      </div>
      
      {/* REVIEW */}
      <ReviewSection/>

      {/* TEAM */}
      <div className="w-screen bg-black h-auto  ">
        <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 md:px-16 py-32  gap-y-2">
          
          <AnimateInViewWrapper  className="w-fit">
            <div className="mb-6 w-fit">
                <ShinyText text="Ekipa" link={ROUTES.EKIPA} speed={3}/>
            </div>
          </AnimateInViewWrapper>
          
          <div className="mb-8">
            <MaskAnimation>
              <h2 className="text-neutral-50 font-teko font-semibold text-4xl  md:text-5xl mb-2">
                Kdo te&nbsp;<BgFrombottomToTop text="striže?"/>
              </h2>
            </MaskAnimation>
            <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                <p className='font-montserrat text-base text-neutral-200 max-w-6xl  mobile:w-full'>
                    Preberite mnenja naših strank. Naše stranke so bistvo vsega, kar počnemo.
                    Njihovo zadovoljstvo je naš največji uspeh in motivacija za nenehno izboljševanje
                    naših storitev. Prepričajte se sami, zakaj nam zaupajo številni zadovoljni uporabniki.
                </p>
            </AnimateInViewWrapper> 
          </div>

          <div className="w-full h-auto flex flex-col md:flex-row items-center md:items-start justify-start gap-x-6 flex-wrap gap-y-6 min-h-[470px]">
          {employees.map((employee,index) => (
              <AnimateInViewWrapper 
                key={employee.name} 
                delay={index/10}
              >
                <TeamCard 
                  key={employee.name}
                  name={employee.name}
                  postion={employee.postion}
                  cta={employee.cta}
                  imgUrl={employee.imgUrl}
                  link={employee.link}/>
              </AnimateInViewWrapper>
            ))}
          </div>
        </div>
      </div>

      <Contact/>

      <HorizontalScrollCarousel/>
      <Toaster />
      <Footer />
    </>
  );
}