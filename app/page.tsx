import Slider from "@/components/carosel";

import Navbar from "@/components/navigation/navbar";
import dataSlider from "./../components/data.json";

export default function Home() {
  return (
   <>
    <Navbar/>
    <main className="overflow-hidden">
        <Slider data={dataSlider}/>
      </main>
    <div className="h-[200vh]"></div>
   </>
  );
}
