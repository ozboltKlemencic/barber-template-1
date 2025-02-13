"use client"

import Footer from '@/components/navigation/footer'
import Navbar from '@/components/navigation/navbar'
import BgFrombottomToTop from '@/components/text/bgFrombottomToTop'
import { MaskAnimation } from '@/components/text/MaskAnimation'
import ShinyText from '@/components/text/ShinyText'
import ROUTES from '@/constants/routes'
import AnimateInViewWrapper from "@/components/animation/fade";
import React from 'react'

import TeamCard from '@/components/cards/teamCard'
import { employees } from '@/constants/data'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="w-screen bg-dark-bg h-auto  ">
          <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 md:px-16  pt-32  gap-y-1">
            <div>
              <AnimateInViewWrapper  className="w-fit">
                <div className="mb-6 w-fit">
                    <ShinyText link={ROUTES.STORITVE} text="Ekipa"  speed={3}/>
                </div>
              </AnimateInViewWrapper>
            </div>
            <div className="mb-4">
              <MaskAnimation>
                <h2 className="text-header font-teko font-semibold text-4xl   md:text-5xl">
                  Naši profesijonalni &nbsp;<BgFrombottomToTop text="brivci"/>
                </h2>
              </MaskAnimation>
              <AnimateInViewWrapper scaleFrom={1} delay={0.3}>
                <p className='font-montserrat text-base text-paragraph max-w-5xl  mobile:w-full'>
                Ekipa Blackout je skupina visoko priznanih in usposobljenih brivcev in frizerjev. Vsak je strokovnjak na svojem področju z dolgoletnimi izkušnjami, dobro opremljen za zagotavljanje najboljših rezultatov.
                </p>
              </AnimateInViewWrapper> 
            </div>
        </div>
        </div>
        {/* TEAM */}
        <div className="w-screen bg-black h-auto  ">
          <div className="h-auto flex flex-col mx-auto max-w-7xl px-4 md:px-16 py-16  gap-y-2">
            <div className="w-full h-auto flex flex-col md:flex-row items-center md:items-start justify-start gap-x-6 flex-wrap gap-y-6 min-h-[470px]">
              {employees.map((employee,index) => (
                  <AnimateInViewWrapper 
                    key={employee.name} 
                    delay={index/10}
                  >
                    <TeamCard
                      key={employee.name}
                      name={employee.name}
                      postion={employee.postion}
                      cta={employee.cta}
                      imgUrl={employee.imgUrl}
                      link={employee.link}/>
                  </AnimateInViewWrapper>
                ))}
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page