import Link from 'next/link';
import React from 'react';


interface Props {
  text: string;
  link:string
}


const Primary: React.FC<Props> = ({ text,link }) => {
  return (
    <Link href={link}>
    <button
      className="relative inline-flex h-[8vh] max-h-16 min-h-14 w-[300px] mobile:w-full tablet:w-[180px] active:scale-95 transition-all overflow-hidden p-[1px] focus:outline-none"
      aria-label={text} 
    >
     
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffec8a_0%,#ffd500_50%,#968738_100%)]"></span>
      
      
      <span className="inline-flex relative h-full w-full text-xl tablet:text-base font-medium text-white md:text-lg cursor-pointer items-center justify-center bg-neutral-950 z-10 transition-all duration-[600ms] hover:bg-black group/gumb backdrop-blur-3xl gap-2 font-montserrat">
        {text}
        <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] transition-all duration-[500ms] ease-linear z-0 group-hover/gumb:translate-x-[200%]"></div>
      </span>
    </button>
    </Link>
  );
};

export default Primary;
