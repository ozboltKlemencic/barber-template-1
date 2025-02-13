import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AnimateInViewWrapper from "@/components/animation/fade";
import { LuClock4 } from "react-icons/lu";
import Select from "./Select";
import Primary from "./buttons/Primary";
import ROUTES from "@/constants/routes";
import { useState } from "react";
import { ChangeEvent } from "react";
import ImageFrame from "./animation/ImageFrame";


export const servicesData = {
  tabs: [
    {
      id: "1",
      category: "STRIŽENJE",
      title: "En nastavek po celi glavi",
      description: "Hitro in enostavno striženje z enim nastavkom za enakomeren videz. Idealna izbira za tiste, ki želijo minimalno vzdrževanje in čist, profesionalen videz brez dodatnega oblikovanja.",
      time: "15 min",
      price: "5,00 €",
      services: ["Induction cut", "Burr cut", "Butch cut", "Crew cut"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "2",
      category: "STRIŽENJE",
      title: "Buzz cut",
      description: "Kratek, enakomeren rez, ki zagotavlja preprost in čist videz. Popolna izbira za aktivne posameznike, ki cenijo minimalistično eleganco in enostavno vsakodnevno vzdrževanje pričeske.",
      time: "30 min",
      price: "18,00 €",
      services: ["Induction cut", "Burr cut", "Butch cut"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "3",
      category: "STRIŽENJE",
      title: "Daljša frizura",
      description: "Frizura za daljše lase, vključno z mullet in taper fade tehnikami. Primerno za stranke, ki želijo ohraniti dolžino las in jih stilsko oblikovati v sodobne trende, z možnostjo prilagajanja glede na obliko obraza.",
      time: "60 min",
      price: "22,00 €",
      services: ["Mullet", "Long Taper Fade", "Layered Cut"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "4",
      category: "STRIŽENJE",
      title: "Fade iz nule",
      description: "Gladek prehod iz gole kože v daljše lase za moderen videz. Ta precizna tehnika striženja ustvari eleganten gradient, ki poudari vaše obrazne poteze in zagotovi sodoben, urban videz.",
      time: "45 min",
      price: "od 18,00 €",
      services: ["Buzz cut", "Mid Fade", "Skin Fade", "Taper Fade"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "5",
      category: "STRIŽENJE",
      title: "Moško klasično",
      description: "Klasično moško striženje z dolžino od 3 mm naprej. Tradicionalna tehnika striženja, ki združuje klasično eleganco s sodobnimi elementi za doseganje brezčasnega videza, primernega za vse priložnosti.",
      time: "30 min",
      price: "15,00 €",
      services: ["Classic Taper", "Ivy League", "Side Part", "Crew Cut"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "6",
      category: "BRADA",
      title: "Oblikovanje in linije (dolga)",
      description: "Oblikovanje daljše brade za urejen in definiran videz. Vključuje natančno oblikovanje kontur in strukturiranje dolžine za doseganje skladne oblike, ki se prilega vašemu obrazu in slogu.",
      time: "30 min",
      price: "13,00 €",
      services: ["Full Beard", "Long Beard Fade", "Shaped Beard"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "7",
      category: "BRADA",
      title: "Britje celotne brade ali glave",
      description: "Popolno britje brade ali glave z britvico ali brivnikom. Vključuje pripravo kože s toplimi brisačami, uporabo profesionalnih izdelkov za britje in nego po britju za maksimalno udobje in gladkost.",
      time: "15 min",
      price: "8,00 €",
      services: ["Clean Shave", "Bald Look"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "8",
      category: "BRADA",
      title: "Oblikovanje in linije (kratka)",
      description: "Urejanje krajše brade za čist in oster videz. Storitev vključuje natančno oblikovanje linij, prilagajanje dolžine in definiranje kontur za doseganje profesionalnega videza, ki poudari vašo obrazno strukturo.",
      time: "15 min",
      price: "10,00 €",
      services: ["Goatee", "Short Beard Fade", "Defined Lines"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "9",
      category: "BRADA",
      title: "Linije",
      description: "Precizno oblikovanje linij za definiran videz brade. Posebna pozornost je namenjena ustvarjanju čistih, ostrih linij ob licih in vratu, kar poudari naravno obliko vaše brade in obraza.",
      time: "15 min",
      price: "5,00 €",
      services: ["Sharp Beard Line", "Defined Jawline"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "10",
      category: "TRAJNO KODRANJE LAS",
      title: "Trajno kodranje in striženje",
      description: "Postopek trajnega kodranja las s prilagojenim striženjem. Vključuje profesionalno svetovanje o najprimernejši vrsti kodrov za vaš tip las, nežno kemično obdelavo in končno oblikovanje za dolgotrajne, naravno vygledujoče kodre.",
      time: "150 min",
      price: "45,00 €",
      services: ["Perm Waves", "Curly Taper Fade"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "11",
      category: "BARVANJE BRADE",
      title: "Barvanje brade - dolga",
      description: "Barvanje daljše brade za osvežen videz. Vključuje izbiro najprimernejšega odtenka za vaš ten kože, profesionalno nanašanje barve in nego po barvanju za dolgotrajne in naravne rezultate.",
      time: "15 min",
      price: "8,00 €",
      services: ["Full Beard Coloring", "Ombre Beard"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "12",
      category: "BARVANJE BRADE",
      title: "Barvanje brade - kratka",
      description: "Barvanje krajše brade za enakomeren ton. Storitev vključuje strokovno svetovanje pri izbiri barve, natančen nanos za enakomerno pokritost in posebno nego po barvanju za ohranjanje živahnosti barve.",
      time: "15 min",
      price: "5,00 €",
      services: ["Goatee Coloring", "Short Beard Touch-up"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    },
    {
      id: "13",
      category: "BARVANJE LAS",
      title: "Barvanje las",
      description: "Profesionalno barvanje las po dogovoru. Vključuje podrobno posvetovanje o želeni barvi in tehniki, uporabo visokokakovostnih barv in posebno nego za maksimalno obstojnost barve in zdravje las.",
      time: "Po dogovoru",
      price: "Cena po dogovoru",
      services: ["Full Hair Coloring", "Highlights", "Balayage"],
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
      ],
    }
  ]
};

  const selectOptions = servicesData.tabs.map(tab => (
    tab.title
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
        <TabsList className="h-auto w-full lg:w-[250px] flex flex-col gap-2 items-start justify-start bg-transparent p-0">
          {servicesData.tabs.map((tab, index) => (
            <AnimateInViewWrapper className="w-full" scaleFrom={1} distance={0} delay={index/10} key={tab.id}>
              <TabsTrigger
                value={tab.id}
                className="relative w-full hidden lg:block bg-dark-bg overflow-hidden rounded-none border border-white/[0.6] py-3 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-black data-[state=active]:shadow-slate-200 data-[state=active]:after:bg-primary hover:bg-neutral-900 transition-colors"
              >
                {tab.title}
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

      <div className="flex-1 min-w-0 flex-shrink lg:max-w-[900px]">
        {servicesData.tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="w-full">
            <div className="flex flex-row w-full flex-wrap gap-6 items-start justify-start">
              <AnimateInViewWrapper scaleFrom={1} distance={0} delay={0.4}>
                <div className="relative w-full flex flex-col justify-start items-start">
                  <h1 className="text-header font-teko text-4xl font-normal">{tab.title}</h1>
                  <p className="text-paragraph font-montserrat text-base mb-4">{tab.description}</p>
                  <ul className="list-square-yellow text-header pl-4 mb-8">
                    {tab.services.map((service, index) => (
                      <li className="pl-2 font-montserrat" key={index}>{service}</li>
                    ))}
                  </ul>
                  <h6 className="font-montserrat text-normal text-header mt-8 pb-1 border-b shadow-zinc-300 border-primary w-full">
                    Cenik
                  </h6>
                  <div className="w-full text-sm p-2 bg-neutral-700/[0.5] flex flex-row items-center justify-center mt-2">
                    <span className="flex items-start w-1/3 flex-row justify-start">
                      <p className="font-montserrat text-subheader">{tab.title}</p>
                    </span>
                    <span className="flex items-center w-1/3  flex-row justify-center gap-x-2">
                      <LuClock4 className="text-subheader"/>
                      <p className="font-montserrat text-subheader">{tab.time}</p>
                    </span>
                    <span className="flex items-start w-1/3  flex-row justify-end">
                      <p className="font-montserrat text-subheader">{tab.price}</p>
                    </span>
                  </div>
                  <div className="flex flex-col mt-16 gap-y-2 w-full">
                    <span className="font-montserrat text-subheader text-sm">
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
                  <div className="relative group aspect-square overflow-hidden flex items-center justify-center">
                    <Image
                      src={image.url}
                      height={600}
                      width={600}
                      className="w-full object-cover"
                      alt={image.alt}
                    />
                    <ImageFrame/>
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


