import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimateInViewWrapper from "@/components/animation/fade";

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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-0 left-0 w-screen flex items-center justify-center gradient-text-stroke font-teko text-[22vw] md:text-[300px] text-black -tracking-tighter  md:font-semibold font-normal " >
          Instagram
        </div>

        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <AnimateInViewWrapper scaleFrom={1} key={card.id}>
              <Card card={card}  /></AnimateInViewWrapper> ;
          })}
          <AnimateInViewWrapper>
            <div className="relative h-[450px] w-[450px] bg-neutral-900">
            <h6 className="text-emerald-50">Najdete nas na </h6>
            </div>
          </AnimateInViewWrapper>
     
        </motion.div>

      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
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
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/img/hero-carosel/banner_1.png",
    title: "Title 7",
    id: 7,
  },
];