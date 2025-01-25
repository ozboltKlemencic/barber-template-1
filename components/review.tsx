import React from 'react';

import ReviewCard from '../components/cards/reviewCard'

import AnimateInViewWrapper from "@/components/animation/fade";
import { MaskAnimation } from './text/MaskAnimation';

interface Review {
    id: string;
    profileImageUrl: string;
    name: string;
    rating: number;
    comment: string;
  }
  
  const REVIEWS: Review[] = [
    {
      id: '1',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Ana Novak',
      rating: 4,
      comment: 'Lepo urejen salon in prijazno osebje. Vse je bilo super, le malo daljši čas čakanja.'
    },
    {
      id: '2',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Miha Kranjc',
      rating: 5,
      comment: 'Top storitev! Vedno se počutim odlično, ko obiščem ta salon. Priporočam vsem!'
    },
    {
      id: '3',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Jure Pavlič',
      rating: 3,
      comment: 'Storitev je bila povprečna, pričakoval sem več glede na ocene. Lokal pa je lepo urejen.'
    },
    {
      id: '4',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Maja Korošec',
      rating: 5,
      comment: 'Najboljša izkušnja do sedaj! Vse je bilo odlično, od storitve do vzdušja. Hvala vam!'
    },
    {
      id: '5',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Gregor Urbančič',
      rating: 4,
      comment: 'Super storitev, vendar bi si želel malo bolj dostopnih cen.'
    },
    {
      id: '6',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Tina Zajc',
      rating: 5,
      comment: 'Prijazno osebje, vedno prisluhnejo željam stranke. Vedno zadovoljna, ko pridem!'
    },
    {
      id: '7',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Matej Hribar',
      rating: 2,
      comment: 'Nisem bil najbolj zadovoljen z izkušnjo. Mislim, da so storitve precenjene za ponujeno kakovost.'
    },
    {
      id: '8',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Sara Obran',
      rating: 4,
      comment: 'Dobra storitev, vendar je trajalo dlje, kot sem pričakovala. Rezultat pa je bil odličen!'
    },
    {
      id: '9',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Aljaž Potočnik',
      rating: 5,
      comment: 'Vrhunska ekipa in vedno prijetno vzdušje! Definitivno priporočam.'
    },
    {
      id: '10',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Eva Breznik',
      rating: 5,
      comment: 'Zelo zadovoljna z vsem! Hitra storitev in zelo prijazno osebje. Vedno se rada vračam.'
    },
    {
      id: '11',
      profileImageUrl: '/img/review-avatar.png',
      name: 'Andrej Novak',
      rating: 4,
      comment: 'Odlično! Morda bi lahko še malo izboljšali komunikacijo, vendar drugače super.'
    }
  ];
  

const ReviewSection = ({

}) => {
    return ( 
        <div className={'relative h-auto w-screen flex items-center justify-start flex-col  md:flex-row'}  > 
            <div className='w-full h-full flex mobile:flex-col mobile:items-center'>
                {/* Text container */}
                <div className=' w-[50%] h-[100vh] mobile:h-[50vh] mobile:w-[95%]  sticky top-0 mobile:static flex items-center justify-center flex-row z-20 mobile:pl-0 pl-52 bg-yellow-circle mobile:bg-mob-yellow-circle'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-y-2'>
                        <MaskAnimation>
                          <h3 className='font-montserrat text-md text-neutral-200'>Mnenja strank</h3>
                        </MaskAnimation>
                        <MaskAnimation>
                          <h2 className='font-teko text-3xl font-bold text-neutral-50'>
                              Več kot 50+ oseb nam&nbsp; 
                              <span className='bg-gradient-to-r from-[#FFD700] to-[#daa52077] bg-clip-text text-transparent'>zaupa</span>.
                          </h2>
                        </MaskAnimation>
                        <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                          <p className='font-montserrat text-md text-neutral-200 w-4/5 mobile:w-full'>
                              Preberite mnenja naših strank. Naše stranke so bistvo vsega, kar počnemo.
                              Njihovo zadovoljstvo je naš največji uspeh in motivacija za nenehno izboljševanje
                              naših storitev. Prepričajte se sami, zakaj nam zaupajo številni zadovoljni uporabniki.
                          </p>
                        </AnimateInViewWrapper> 
                    </div>
                    <div className='absolute top-0 right-[-100%] mobile:hidden  w-full h-full z-50' style={{background: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 65%, black 100%)'}}></div>
                </div>


                {/* reviews container */}
                <div className=' w-[50%] mobile:w-full mobile:flex-col h-auto mobile:overflow-hidden flex items-center justify-center gap-x-4  gap-y-4 pr-52 mobile:pr-0'>
                    {/* Review blocks */}
                    <div className='w-1/2 mobile:w-full  flex items-center justify-center flex-col  gap-y-4'>
                        {REVIEWS.filter((review) => Number(review.id) <= 5).map((review) => (
                          <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                            <ReviewCard  profilImgUrl={review.profileImageUrl} {...review} />
                          </AnimateInViewWrapper>
                        ))}
                    </div>

                    <div className='w-1/2 mobile:w-full flex items-center justify-center flex-col  gap-y-4'>
                        {REVIEWS.filter((review) => Number(review.id) > 5).map((review) => (
                          <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                                <ReviewCard  profilImgUrl={review.profileImageUrl} {...review} />
                          </AnimateInViewWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
