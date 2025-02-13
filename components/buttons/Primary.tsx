import Link from 'next/link';
import React from 'react';



interface Props {
  text: string;
  link:string;
  h?:string;
  w?:string;
  Icon?: React.ReactNode,
}


const Primary: React.FC<Props> = ({ text,link,w="300px",h="64px",Icon }) => {
  return (
    <Link href={link}>
      <button
        className={`relative inline-flex active:scale-95 transition-all overflow-hidden p-[1px] focus:outline-none w-full`}
        aria-label={text} 
        style={{ height: h, width: w }}
      >
      
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffec8a_0%,#ffd500_50%,#968738_100%)]"></span>
        
        
        <span className="inline-flex relative h-full w-full text-xl tablet:text-base font-medium text-header  cursor-pointer items-center justify-center bg-neutral-950 z-10 transition-all duration-[600ms] hover:bg-dark-bg group/gumb backdrop-blur-3xl gap-2 font-montserrat gap-x-3">
          {text}
          <span className={`${Icon ? "size-4" :"size-0"}flex items-center justify-center text-header font-light]`} >
            {Icon}
          </span>
          <div className="absolute inset-0 -top-[40%] w-[20%] h-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.6] to-transparent translate-x-[-400%] transition-all duration-[300ms] ease-linear z-0 group-hover/gumb:translate-x-[600%]"></div>
        </span>
      </button>
    </Link>
  );
};

export default Primary;
