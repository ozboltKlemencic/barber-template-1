import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AnimateInViewWrapper from "@/components/animation/fade";
import { LuClock4 } from "react-icons/lu";
import Select from "./Select";
import Primary from "./buttons/Primary";
import ROUTES from "@/constants/routes";
import { useState } from "react";
import { ChangeEvent } from "react";


export const servicesData = {
    tabs: [
      {
        id: "1",
        label: "Moško striženje",
        title: "Moško striženje",
        description:
          "Buzz cut je ena izmed najbolj klasičnih in preprostih moških frizur, ki nikoli ne gre iz mode. Ta stil vključuje enakomerno striženje las po celotni glavi na zelo kratko dolžino z električnim strižnikom. Buzz cut je idealna izbira za tiste, ki iščejo nizko vzdrževalno frizuro, ki je enostavna za urejanje in primerna za vsako priložnost.",
        listItems: ["Induction cut", "Burr cut", "Butch cut", "Crew cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Buzz Cut Style",
          alt: "Different variations of Buzz Cut hairstyle"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "2",
        label: "Fejd iz nule",
        title: "Mid Fade",
        description:
          "Mid fade je sodoben in eleganten stil striženja, pri katerem se lasje na straneh postopoma krajšajo od sredine glave navzdol, dokler ne preidejo v čisto britje ali zelo kratke lase. Ta prehod ustvarja čist in oster videz, ki je priljubljen pri moških vseh starosti.",
        listItems: ["Klasičen Mid Fade", "Moderen Mid Fade", "Teksturiran Mid Fade", "Mid Fade z oblikovanjem"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }),
        time:"15",
        price:"20€"
        
      },
      {
        id: "3",
        label: "Skin Fade",
        title: "Skin Fade",
        description:
          "Skin fade je priljubljena moška frizura, pri kateri se dolžina las postopoma zmanjšuje, dokler ne izgine v kožo. Ta stil omogoča čist in sodoben videz, ki se lepo ujema z različnimi zgornjimi dolžinami las.",
        listItems: ["Low Skin Fade", "High Skin Fade", "Drop Skin Fade", "Bald Fade"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Skin Fade Style",
          alt: "Different variations of Skin Fade haircut"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "4",
        label: "Pompadour",
        title: "Pompadour",
        description:
          "Pompadour je klasičen stil, pri katerem so lasje na vrhu dolgi in počesani nazaj, medtem ko so stranice krajše. Ta frizura daje moškemu prefinjen, a hkrati drzen videz.",
        listItems: ["Klasičen Pompadour", "Sodobni Pompadour", "Pompadour s fade", "Teksturiran Pompadour"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Pompadour Style",
          alt: "Different variations of Pompadour hairstyle"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "5",
        label: "Taper Fade",
        title: "Taper Fade",
        description:
          "Taper fade je vsestranska frizura, kjer lasje postopoma zbledijo proti vratu in ušesom. Ta stil je eleganten in enostaven za vzdrževanje.",
        listItems: ["Low Taper Fade", "High Taper Fade", "Skin Taper Fade", "Classic Taper"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Taper Fade Style",
          alt: "Different variations of Taper Fade haircut"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "6",
        label: "Undercut",
        title: "Undercut",
        description:
          "Undercut je frizura, pri kateri so stranice zelo kratke ali obrite, zgornji del las pa ostane dolg. Ta frizura daje kontrasten in izrazit videz.",
        listItems: ["Klasičen Undercut", "Undercut s fade", "Teksturiran Undercut", "Slick Back Undercut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Undercut Style",
          alt: "Different variations of Undercut hairstyle"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "7",
        label: "Crew Cut",
        title: "Crew Cut",
        description:
          "Crew cut je kratka in praktična frizura, pri kateri so lasje na vrhu nekoliko daljši kot na straneh. Idealna je za moške, ki želijo športen in čist videz.",
        listItems: ["Klasičen Crew Cut", "Ivy League Crew Cut", "Textured Crew Cut", "Fade Crew Cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Crew Cut Style",
          alt: "Different variations of Crew Cut hairstyle"
        }),
        time:"15",
        price:"20€"
      },
      {
        id: "8",
        label: "Buzz Cut",
        title: "Buzz Cut",
        description:
          "Buzz cut je preprosta, a brezčasna moška frizura, ki zahteva minimalno vzdrževanje. Idealen je za tiste, ki iščejo praktično in elegantno rešitev.",
        listItems: ["Induction cut", "Burr cut", "Butch cut", "Crew cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Buzz Cut Style",
          alt: "Different variations of Buzz Cut hairstyle"
        }),
        time:"15",
        price:"20€"
      }
    ]
  };
  
  const selectOptions = servicesData.tabs.map(tab => (
    tab.label
  ));

export default function TabService() {
  const [selectedOption, setSelectedOption] = useState(servicesData.tabs[0].id);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Tabs 
      defaultValue={selectedOption || servicesData.tabs[0].id} 
      value={selectedOption} 
      onValueChange={setSelectedOption} 
      className="w-full flex flex-col lg:flex-row justify-center gap-x-8 gap-y-4"
    >
      <div className="[&_*]:!bg-transparent mb-0">
        <TabsList className="h-auto w-full lg:w-[150px] flex flex-col gap-2 items-start justify-start bg-transparent p-0">
          {servicesData.tabs.map((tab, index) => (
            <AnimateInViewWrapper className="w-full" scaleFrom={1} distance={0} delay={index/10} key={tab.id}>
              <TabsTrigger
                value={tab.id}
                className="relative w-full hidden lg:block bg-neutral-950 overflow-hidden rounded-none border border-white/[0.5] py-3 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-black data-[state=active]:shadow-slate-200 data-[state=active]:after:bg-yellow-200 hover:bg-neutral-900 transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            </AnimateInViewWrapper>
          ))}
          <AnimateInViewWrapper className="w-full" scaleFrom={1} distance={0} delay={0.3}>
            <TabsTrigger value={selectedOption} className="w-full p-0 lg:hidden">
              <Select options={selectOptions} onChange={handleSelectChange} />
            </TabsTrigger>
          </AnimateInViewWrapper>
        </TabsList>
      </div>

      <div className="flex-1 min-w-0 lg:max-w-[900px]">
        {servicesData.tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="w-full">
            <div className="flex flex-row w-full flex-wrap gap-6 items-start justify-start">
              <AnimateInViewWrapper scaleFrom={1} distance={0} delay={0.4}>
                <div className="relative w-full flex flex-col justify-start items-start">
                  <h1 className="text-neutral-50 font-teko text-4xl font-normal">{tab.title}</h1>
                  <p className="text-neutral-200 font-montserrat text-base mb-4">{tab.description}</p>
                  <ul className="list-square-yellow text-neutral-100 pl-4 mb-8">
                    {tab.listItems.map((listItems, index) => (
                      <li className="pl-2 font-montserrat" key={index}>{listItems}</li>
                    ))}
                  </ul>
                  <h6 className="font-montserrat text-normal text-neutral-50 mt-8 pb-1 border-b shadow-zinc-300 border-yellow-200 w-full">
                    Cenik
                  </h6>
                  <div className="w-full text-sm py-2 px-1 bg-neutral-700/[0.5] flex flex-row items-center justify-center mt-2">
                    <span className="flex items-start w-1/3 flex-row justify-start">
                      <p className="font-montserrat text-neutral-200">{tab.title}</p>
                    </span>
                    <span className="flex items-center w-1/3 flex-row justify-start gap-x-2">
                      <LuClock4 className="text-neutral-200"/>
                      <p className="font-montserrat text-neutral-200">{tab.time}</p>
                    </span>
                    <span className="flex items-start w-1/3 flex-row justify-start">
                      <p className="font-montserrat text-neutral-200">{tab.price}</p>
                    </span>
                  </div>
                  <div className="flex flex-col mt-16 gap-y-2 w-full">
                    <span className="font-montserrat text-neutral-200 text-sm">
                      Pohiti in si rezerviraj termin
                    </span>
                    <div className="w-full sm:hidden">
                      <Primary text="Naroči se" w="100%" link={ROUTES.NAROCANJE}/>
                    </div>
                    <div className="w-full hidden sm:block">
                      <Primary text="Naroči se" link={ROUTES.NAROCANJE}/>
                    </div>
                  </div>
                </div>
              </AnimateInViewWrapper>
            </div>
          </TabsContent>
        ))}
      </div>

      <div className="w-full lg:w-[250px] mt-8 lg:mt-0">
        {servicesData.tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="bg-transparent w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {tab.images.map((image, index) => (
                <AnimateInViewWrapper scaleFrom={1} distance={10} delay={index/10} key={index}>
                  <div className="relative aspect-square overflow-hidden flex items-center justify-center">
                    <Image
                      src={image.url}
                      height={600}
                      width={600}
                      className="w-full object-cover"
                      alt={image.alt}
                    />
                  </div>
                </AnimateInViewWrapper>
              ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}


