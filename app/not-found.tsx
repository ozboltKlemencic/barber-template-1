import BarberPole from '@/components/animation/BarberPole'
import ROUTES from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-[100dvh] md:h-screen bg-black flex items-center justify-center flex-col '>
        <div className='scale-50 md:scale-75 '>
            <div className='flex items-center justify-center gap-x-6  '>
                <BarberPole/>
                <Image src="/img/logo/big-logo.png" width={300} height={300} alt='logo'/>
                <BarberPole/>
            </div>
            <p className='font-montserrat text-neutral-100 max-w-2xl text-sm md:text-base pt-16 text-center px-4'>Upss..... Nekaj je šlo narobe. Vrnite se nazaj na <Link className='text-yellow-200/[0.8] hover:text-yellow-200 transition-all duration-300 underline underline-offset-2 hover:no-underline' href={ROUTES.DOMOV}>domačo stran</Link></p>
        </div>
    </div>
  )
}

export default NotFound