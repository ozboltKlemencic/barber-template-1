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
  const [showAll, setShowAll] = React.useState(false);

  const toggleHeight = () => {
    setShowAll(!showAll);
  };
  return ( 
    <>
    <div className="relative w-screen flex flex-col md:flex-row"> 
        <div className="w-creen flex flex-col md:flex-row ">
            {/* Text Container */}
            
            <div className="w-full md:w-1/2 md:h-screen px-4 md:px-16 py-12 md:sticky md:top-0 flex items-center justify-center bg-yellow-circle mobile:bg-mob-yellow-circle">
                <div className="w-full max-w-xl flex flex-col gap-y-4  text-center md:text-left">
                    <MaskAnimation>
                        <h3 className="font-montserrat text-md text-neutral-200">Mnenja strank</h3>
                    </MaskAnimation>
                    
                    <MaskAnimation>
                        <h2 className="font-teko text-2xl md:text-3xl font-bold text-neutral-50">
                            Več kot 50+ oseb nam&nbsp; 
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#daa52077] bg-clip-text text-transparent">
                                zaupa
                            </span>.
                        </h2>
                    </MaskAnimation>
                    
                    <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                        <p className="font-montserrat text-md text-neutral-200">
                            Preberite mnenja naših strank. Naše stranke so bistvo vsega, kar počnemo.
                            Njihovo zadovoljstvo je naš največji uspeh in motivacija za nenehno izboljševanje
                            naših storitev. Prepričajte se sami, zakaj nam zaupajo številni zadovoljni uporabniki.
                        </p>
                    </AnimateInViewWrapper> 
                    <div className='absolute  top-0 right-0 md:right-[-100%] mobile:hidden  w-full h-32 md:h-1/3 z-50 bg-gradient-to-b from-black to-transparent'></div>
                    <div className='absolute bottom-0 right-0 md:right-[-100%] mobile:hidden  w-full h-32 md:h-1/3 z-50 bg-gradient-to-t from-black to-transparent'></div>
                </div>
            </div>

            {/* Reviews Container */}
            <div className={`w-full  md:w-1/2 md:h-auto ${showAll ? 'h-auto' : 'h-[93vh]'}   overflow-hidden  md:px-16 py-8 flex  items-center md:justify-center justify-start flex-col md:flex-row gap-4`}>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 md:mt-20">
                    {REVIEWS.filter((review) => Number(review.id) <= 5).map((review) => (
                        <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                            <ReviewCard profilImgUrl={review.profileImageUrl} {...review} />
                        </AnimateInViewWrapper>
                    ))}
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {REVIEWS.filter((review) => Number(review.id) > 5).map((review) => (
                        <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                            <ReviewCard profilImgUrl={review.profileImageUrl} {...review} />
                        </AnimateInViewWrapper>
                    ))}
                </div>
                
            </div>
            
        </div>
        
    </div>
    <div className='md:hidden  w-full flex justify-center items-center mt-12 '>
      <AnimateInViewWrapper>
      <button 
          onClick={toggleHeight} 
          className={`text-neutral-400 px-4 bg-gradient from-neutral-800 to-neutral-950 border border-yellow-200/[0.2] py-2 ${showAll ? "hidden" : "block"}`}
      >
        Poglej več
      </button>
      </AnimateInViewWrapper>
    </div>
    </>
);
};

export default ReviewSection;
