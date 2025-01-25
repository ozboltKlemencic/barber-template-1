import React from 'react'

interface Props{
    text:string;
}

const BgFrombottomToTop = ({text}:Props) => {
  return (
    <span className='relative inline-block  group/coolEffect'>
        <span className='relative z-[2] cursor-pointer'>{text}</span>
        <span className={`absolute cursor-pointer bottom-[5%] right-0 h-[30%]  group-hover/coolEffect:h-[105%] w-[105%] bg-gradient-to-tr from-yellow-400/[0.5] to-yellow-300/[0.8] left-1/2 transform -translate-x-1/2 z-[1] transition-all duration-300 ease-in-out`}></span>
    </span>
  )
}

export default BgFrombottomToTop