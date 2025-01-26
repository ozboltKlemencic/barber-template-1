import Link from 'next/link';
import React from 'react';


interface Props {
  text: string;
  link:string;
  h?:string;
  w?:string;
}


const Primary: React.FC<Props> = ({ text,link,w="300px",h="64px" }) => {
  return (
    <Link href={link}>
      <button
        className={`relative inline-flex active:scale-95 transition-all overflow-hidden p-[1px] focus:outline-none w-full`}
        aria-label={text} 
        style={{ height: h, width: w }}
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
