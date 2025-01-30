import React from 'react'

const ImageFrame = () => {
  return (
    <>
        <div className='absolute top-0 left-0 w-full h-full group-hover:bg-black/[0.4] ease-in transition-all duration-300' />

        {/* Top-left corner */}
      <div className="absolute top-4 left-3 group-hover:h-[1px] group-hover:w-6 w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>
      <div className="absolute top-3 left-4 group-hover:h-6 group-hover:w-[1px] w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>

      {/* Top-right corner */}
      <div className="absolute top-4 right-3 group-hover:h-[1px] group-hover:w-6 w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>
      <div className="absolute top-3 right-4 group-hover:h-6 group-hover:w-[1px] w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>

      {/* Bottom-left corner */}
      <div className="absolute bottom-4 left-3 group-hover:h-[1px] group-hover:w-6 w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>
      <div className="absolute bottom-3 left-4 group-hover:h-6 group-hover:w-[1px] w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>

      {/* Bottom-right corner */}
      <div className="absolute bottom-4 right-3 group-hover:h-[1px] group-hover:w-6 w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>
      <div className="absolute bottom-3 right-4 group-hover:h-6 group-hover:w-[1px] w-0 h-0 bg-yellow-100 ease-in transition-all duration-300"/>
        
    </>
  )
}

export default ImageFrame