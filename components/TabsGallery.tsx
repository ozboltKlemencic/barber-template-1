import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AnimateInViewWrapper from "@/components/animation/fade";
import ImageFrame from "./animation/ImageFrame";

export const galleryData = {
  tabs: [
    {
      id: "tab-1",
      label: "Buzz Cut",
      images: [
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-2",
      label: "Mid Fade",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-3",
      label: "Skin Fade",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-4",
      label: "Pompadour",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-5",
      label: "Taper Fade",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },

        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-6",
      label: "Undercut",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },

        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-7",
      label: "Crew Cut",
      images: [
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

        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        }
      ],
    },
    {
      id: "tab-8",
      label: "Buzz Cuft",
      images: [
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-1.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/buzz-cut/buzz-cut-3.jpg",
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
      id: "tab-9",
      label: "Mid Ffade",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        
      ],
    },
    {
      id: "tab-10",
      label: "Skin Fafde",
      images: [
        {
          url: "/img/haircuts/mid-fade/mid-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/mid-fade/mid-fade-2.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        {
          url: "/img/haircuts/burst-fade/burst-fade-3.jpg",
          name: "Mid Fade Style",
          alt: "Different variations of Mid Fade haircut"
        },
        
      ],
    },
  ]
};

export default function GalleryTabs() {
  return (
    <Tabs defaultValue={galleryData.tabs[0].id} className="">
      <AnimateInViewWrapper scaleFrom={1} distance={0} delay={0.4}>
        <div className="overflow-x-auto md:overflow-visible  w-full mb-7 [&_*]:!bg-transparent">
          <TabsList className="h-auto min-w-max md:min-w-0   w-full flex md:flex-wrap  gap-2 items-start justify-start bg-transparent  p-0">
            {galleryData.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative w-fit  bg-neutral-950 overflow-hidden rounded-none border border-white/[0.5] py-2 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0  after:h-0.5 data-[state=active]:bg-black data-[state=active]:shadow-slate-200 data-[state=active]:after:bg-yellow-200 hover:bg-neutral-900 transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </AnimateInViewWrapper>
    
      {galleryData.tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="bg-transparent w-full">
          <div className="flex flex-row w-full flex-wrap gap-6 items-center justify-center md:justify-start">
            {tab.images.map((image, index) => (
              <AnimateInViewWrapper scaleFrom={1}  delay={index/10}  key={index}>
                <div 
                  className="relative group w-full h-[90vw] aspect-square sm:h-[260px] sm:w-[250px] overflow-hidden flex items-center justify-center" 
                >
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
  </Tabs>
  );
}
