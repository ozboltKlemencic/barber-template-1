import React from 'react'

export default function Content() {
  return (
    <div className='bg-red-100  to-black py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            sds
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            fgdf
        </div>
    )
}