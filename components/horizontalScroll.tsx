import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimateInViewWrapper from "@/components/animation/fade";
import CtaIcon from "./CtaIcon";
import SecondaryBtn from "./buttons/Secondary";
import { CgInstagram } from "react-icons/cg";
import Link from "next/link";
import { info } from "@/constants/info";

const Example = () => {
  return (
    <div className="h-fit ">
      <div className="z-20">
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] z-[10] bg-neutral-950">
      <div className="sticky top-0 flex h-screen sm:min-h-[800px]  items-center overflow-hidden">
        
        <div className="absolute top-0 left-0 w-[90vw] flex items-center justify-center gradient-text-stroke font-teko text-[22vw] md:text-[100px] lg:text-[200px] xl:text-[300px] text-black -tracking-tighter  md:font-semibold font-normal " >
          Instagram
        </div>

        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card,index) => {
            return <AnimateInViewWrapper scaleFrom={1} delay={index/10} key={card.id}>
              <Card card={card}  /></AnimateInViewWrapper> ;
          })}
          <AnimateInViewWrapper>
            <div className="relative h-[450px] w-[450px] items-center justify-center flex ">
              <div className="flex items-center justify-center flex-col gap-y-3">
                <h6 className="text-emerald-50 text-4xl font-teko">Najdete nas na </h6>
                <CtaIcon/>
              </div>
            </div>
          </AnimateInViewWrapper>
        </motion.div>
        <div className="absolute md:bottom-0 bottom-6 lg:bottom-12 left-0 w-screen flex items-center justify-center gradient-text-stroke font-teko text-[22vw] md:text-[300px] text-black -tracking-tighter  md:font-semibold font-normal my-4" >
          <SecondaryBtn text="Sledi nam" link={info.instagramLink}/>
        </div>
        </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <Link href={card.link} target="_blank">
    `<div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10  flex items-center justify-center">
        <div className="bg-gradient-to-br from-black/[0.2] to-black/[0.05] flex items-center justify-center w-full h-full translate-y-full duration-300 transition-all group-hover:translate-y-0  backdrop-blur-lg">
          <span className=" p-8 text-xl gap-x-2 font-semibold uppercase text-white flex items-center justify-center">
            <CgInstagram/>
            {card.title}
          </span>
        </div>
      </div>
    </div>`
    </Link>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
  link:string;
};

const cards: CardType[] = [
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 1,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 2,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 3,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 4,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 5,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 6,
    link: info.instagramLink,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: info.instagramLabel,
    id: 7,
    link: info.instagramLink,
  },
];