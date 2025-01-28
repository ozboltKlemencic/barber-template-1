"use client"

import { useRef, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCreative, Controller } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import Image from "next/image"
import "swiper/css"
import "swiper/css/effect-creative"
import { RxScissors } from "react-icons/rx";
import { LuMapPin } from "react-icons/lu";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Primary from "@/components/buttons/Primary"
import ROUTES from "@/constants/routes"
import { info } from "@/constants/info"

interface Slide {
  id: number
  title: string
  description: string
  image: string
  Icon: React.ReactNode
  link:string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Hude frizure vsak dan",
    description: "Rezervirajte svoj termin",
    image: "/img/hero-carosel/banner_1.png",
    Icon: <RxScissors/>,
    link: ROUTES.NAROCANJE,
  },
  {
    id: 2,
    title: "Kako priti do nas?",
    description: info.lokacija,
    image: "/img/hero-carosel/banner_2.png",
    Icon: <LuMapPin/>,
    link: info.lokacijaLink,
  },
  {
    id: 3,
    title: "Vrhunski brivski mojstri za vas",
    description: "Preobrazbe, striženje, britje, nega.",
    image: "/img/hero-carosel/banner_1.png",
    Icon: <RxScissors/>,
    link: ROUTES.NAROCANJE,
  },
]

const Carousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const swiper = swiperRef.current
    if (swiper) {
      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex)
      }
      swiper.on("slideChange", handleSlideChange)
      swiper.on("loopFix", handleSlideChange)
      return () => {
        swiper.off("slideChange", handleSlideChange)
        swiper.off("loopFix", handleSlideChange)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, EffectCreative, Controller]}
        autoplay={{ delay: 6000 }}
        loop={true}
        parallax={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
            scale: 0.9,
            origin: 'left center',
          },
          next: {
            shadow: true,
            translate: ['100%', 0, 0],
            scale: 0.9,
            origin: 'right center',
          },
        }}
        speed={1300}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        className="h-[calc(100dvh_-48px)] md:h-[calc(100vh_-48px)] mt-12 min-h-[600px] md:max-h-[1100px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-[1500] ease-out transform "
              />
              <div className="absolute inset-0  flex items-center  justify-center">
                <div className="text-center text-white  max-w-7xl w-[92vw] md:w-[1200px] bg-black/[0.4] md:bg-transparent md:backdrop-blur-none backdrop-blur-md md:px-20 lg:px-6 px-4  py-4 flex flex-col md:justify-start justify-center md:items-start items-center gap-y-3 md:gap-y-4 lg:gap-y-6">
                    <div className="overflow-hidden">
                      <p className="text-sm md:text-base lg:text-xl font-montserrat translate-y-8 opacity-0  transition-all duration-700 delay-100 [.swiper-slide-active_&]:translate-y-0 [.swiper-slide-active_&]:opacity-100">
                        {slide.description}
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl  font-semibold font-teko  translate-y-8 opacity-0 transition-all duration-700 delay-200 [.swiper-slide-active_&]:translate-y-0 [.swiper-slide-active_&]:opacity-100">
                          {slide.title}
                      </h2>
                    </div>
                    <div className="overflow-hidden w-full md:w-fit">
                      <div
                        className=" translate-y-8 w-full opacity-0 transition-all duration-700 delay-300 [.swiper-slide-active_&]:translate-y-0 [.swiper-slide-active_&]:opacity-100"
                      >
                        <Primary text={slide.id === 2 ? "Zemljevid":"Naroči se"} link={slide.link} w="300px" h="60px" Icon={slide.Icon}/>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-2 border transition-colors ${
              index === activeIndex
                ? "bg-[rgba(222,211,140,1)] border-transparent"
                : "bg-black border-[rgba(222,211,140,1)]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between px-4 -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="transition-all duration-300 bg-gradient-to-r hover:to-neutral-900 hover:from-neutral-950 to-neutral-700/90 from-neutral-900 flex items-center justify-center border border-yellow-200 p-1.5 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3"
          aria-label="Previous slide"
        >
          <IoIosArrowBack className="text-white text-2xl pr-0.5" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="transition-all duration-300 bg-gradient-to-r hover:from-neutral-900 hover:to-neutral-950 from-neutral-700/90 to-neutral-900 flex items-center justify-center border border-yellow-200 p-1.5 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3"
          aria-label="Next slide"
        >
          <IoIosArrowForward className="text-white text-2xl pl-0.5" />
        </button>
      </div>
    </div>
  )
}

export default Carousel

