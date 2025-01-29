import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AnimateInViewWrapper from "@/components/animation/fade";

export const servicesData = {
    tabs: [
      {
        id: "tab-1",
        label: "Moško striženje",
        title: "Buzz Cut",
        description:
          "Buzz cut je ena izmed najbolj klasičnih in preprostih moških frizur, ki nikoli ne gre iz mode. Ta stil vključuje enakomerno striženje las po celotni glavi na zelo kratko dolžino z električnim strižnikom. Buzz cut je idealna izbira za tiste, ki iščejo nizko vzdrževalno frizuro, ki je enostavna za urejanje in primerna za vsako priložnost.",
        listItems: ["Induction cut", "Burr cut", "Butch cut", "Crew cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Buzz Cut Style",
          alt: "Different variations of Buzz Cut hairstyle"
        })
      },
      {
        id: "tab-2",
        label: "Fejd iz nule",
        title: "Mid Fade",
        description:
          "Mid fade je sodoben in eleganten stil striženja, pri katerem se lasje na straneh postopoma krajšajo od sredine glave navzdol, dokler ne preidejo v čisto britje ali zelo kratke lase. Ta prehod ustvarja čist in oster videz, ki je priljubljen pri moških vseh starosti.",
        listItems: ["Klasičen Mid Fade", "Moderen Mid Fade", "Teksturiran Mid Fade", "Mid Fade z oblikovanjem"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        })
      },
      {
        id: "tab-3",
        label: "Skin Fade",
        title: "Skin Fade",
        description:
          "Skin fade je priljubljena moška frizura, pri kateri se dolžina las postopoma zmanjšuje, dokler ne izgine v kožo. Ta stil omogoča čist in sodoben videz, ki se lepo ujema z različnimi zgornjimi dolžinami las.",
        listItems: ["Low Skin Fade", "High Skin Fade", "Drop Skin Fade", "Bald Fade"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Skin Fade Style",
          alt: "Different variations of Skin Fade haircut"
        })
      },
      {
        id: "tab-4",
        label: "Pompadour",
        title: "Pompadour",
        description:
          "Pompadour je klasičen stil, pri katerem so lasje na vrhu dolgi in počesani nazaj, medtem ko so stranice krajše. Ta frizura daje moškemu prefinjen, a hkrati drzen videz.",
        listItems: ["Klasičen Pompadour", "Sodobni Pompadour", "Pompadour s fade", "Teksturiran Pompadour"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Pompadour Style",
          alt: "Different variations of Pompadour hairstyle"
        })
      },
      {
        id: "tab-5",
        label: "Taper Fade",
        title: "Taper Fade",
        description:
          "Taper fade je vsestranska frizura, kjer lasje postopoma zbledijo proti vratu in ušesom. Ta stil je eleganten in enostaven za vzdrževanje.",
        listItems: ["Low Taper Fade", "High Taper Fade", "Skin Taper Fade", "Classic Taper"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Taper Fade Style",
          alt: "Different variations of Taper Fade haircut"
        })
      },
      {
        id: "tab-6",
        label: "Undercut",
        title: "Undercut",
        description:
          "Undercut je frizura, pri kateri so stranice zelo kratke ali obrite, zgornji del las pa ostane dolg. Ta frizura daje kontrasten in izrazit videz.",
        listItems: ["Klasičen Undercut", "Undercut s fade", "Teksturiran Undercut", "Slick Back Undercut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Undercut Style",
          alt: "Different variations of Undercut hairstyle"
        })
      },
      {
        id: "tab-7",
        label: "Crew Cut",
        title: "Crew Cut",
        description:
          "Crew cut je kratka in praktična frizura, pri kateri so lasje na vrhu nekoliko daljši kot na straneh. Idealna je za moške, ki želijo športen in čist videz.",
        listItems: ["Klasičen Crew Cut", "Ivy League Crew Cut", "Textured Crew Cut", "Fade Crew Cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Crew Cut Style",
          alt: "Different variations of Crew Cut hairstyle"
        })
      },
      {
        id: "tab-8",
        label: "Buzz Cut",
        title: "Buzz Cut",
        description:
          "Buzz cut je preprosta, a brezčasna moška frizura, ki zahteva minimalno vzdrževanje. Idealen je za tiste, ki iščejo praktično in elegantno rešitev.",
        listItems: ["Induction cut", "Burr cut", "Butch cut", "Crew cut"],
        images: Array(3).fill({
          url: "/img/haircuts/burst-fade/burst_fade_1.png",
          name: "Buzz Cut Style",
          alt: "Different variations of Buzz Cut hairstyle"
        })
      }
    ]
  };
  

export default function TabService() {
  return (
    <Tabs defaultValue={servicesData.tabs[0].id} className="[&_*]:!bg-transparent w-full flex justify-center gap-x-12">
      
        <div className="">
          <TabsList className="h-auto w-[150px]  flex flex-col  gap-2 items-start justify-start bg-transparent  p-0">
            {servicesData.tabs.map((tab,index) => (
                <AnimateInViewWrapper className="w-full" scaleFrom={1} distance={0} delay={index/10} key={tab.id}>
                    <TabsTrigger
                        
                        value={tab.id}
                        className="relative w-full bg-neutral-950 overflow-hidden rounded-none border border-white/[0.5] py-3 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0  after:h-0.5 data-[state=active]:bg-black data-[state=active]:shadow-slate-200 data-[state=active]:after:bg-yellow-200 hover:bg-neutral-900 transition-colors"
                    >
                        {tab.label}
                    </TabsTrigger>
                </AnimateInViewWrapper>
            ))}
          </TabsList>
        </div>
      
    <div className="w-auto">
      {servicesData.tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="bg-transparent w-full bg-red-50">
          <div className="flex flex-row w-full flex-wrap gap-6 -mt-2 items-start justify-start md:justify-start">
           
              <AnimateInViewWrapper scaleFrom={1}  delay={0}  >
                <div 
                  className="relative w-full flex flex-col justify-start items-start max-w-[800px]" 
                >
                    <h1 className="text-neutral-100">{tab.title}</h1>
                    <p className="text-neutral-50">{tab.description}</p>
                    <ul className='list-square-yellow text-neutral-100 pl-4 mb-8'>
                    {tab.listItems.map((listItems, index) => (
                        <li className='pl-2 font-montserrat' key={index}>{listItems}</li> 
                    ))}
                    </ul>
                </div>
              </AnimateInViewWrapper>
         
          </div>
        </TabsContent>
      ))}
      </div>

      <div className=" w-[250px]">
      {servicesData.tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="bg-transparent w-full bg-red-50">
          <div className="flex flex-row w-full flex-wrap gap-6 -mt-2 items-center justify-center md:justify-start">
            {tab.images.map((image, index) => (
              <AnimateInViewWrapper scaleFrom={1}  delay={index/10}  key={index}>
                <div 
                  className="relative w-full h-[20rem] sm:h-[220px] aspect-square overflow-hidden flex items-center justify-start" 
                >
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
