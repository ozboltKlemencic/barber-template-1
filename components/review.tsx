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
      profileImageUrl: '/img/reviews/matej_miklavcic.png',
      name: 'Matej Miklavcic',
      rating: 5,
      comment: 'Daleč najboljši frizer naokoli. Delavci zelo prijazni in korektni. Prav tako storitve kvalitetne in ustrezne.'
    },
    {
      id: '2',
      profileImageUrl: '/img/reviews/zan_novak.png',
      name: 'zan novak',
      rating: 5,
      comment: 'Najboljša brivnica osebje zelo prijazno, muzika je top pejte se strižt/brit v blackouta'
    },
    {
      id: '3',
      profileImageUrl: '/img/reviews/matic_mravlja.png',
      name: 'Matic Mravlja',
      rating: 5,
      comment: 'Odlična izkušnja, možnost spletnega naročanja.Toplo priporočam'
    },
    {
      id: '4',
      profileImageUrl: '/img/reviews/jelka_turk.png',
      name: 'jelka Turk',
      rating: 5,
      comment: 'Zelo prijazno osebje znata prisluhniti strankam . Lokal imata zelo lep in urejen .Obiščite jih ne bo vam žal.'
    },
    {
      id: '5',
      profileImageUrl: '/img/reviews/eldin_imamovic.png',
      name: 'Eldin Imamovic',
      rating: 5,
      comment: 'Odlična storitev, kdor obišče enkrat, jih ne menja.Vse pohvale in priporočila!'
    },
    {
      id: '6',
      profileImageUrl: '/img/reviews/nik_dijak.png',
      name: 'Nik Dijak',
      rating: 5,
      comment: 'Brivec/frizer res odličen, striže z užitkom in s srcem, obvlada. Glede na moje vrtince je res vrhunski, probal sem se strižt pri marsikomu, ampak edino on zna ustrižt tako kot se zagre. Tako, da res priporočam. Termine ma pa kar zasedene, tako da obvezno se prednaročite.'
    },
    {
      id: '7',
      profileImageUrl: '/img/reviews/jaka_novinc.png',
      name: 'jaka novinc',
      rating: 5,
      comment: 'Odličen frizer, posveti se detajlom, vidi se da uživa v svojem delu.'
    },
    {
      id: '8',
      profileImageUrl: '/img/reviews/luka_kajzar.png',
      name: 'Luka Kajzar',
      rating: 5,
      comment: 'ne komplicira, poslusa stranko in si vzame cas da premisle ne pa sam neki na hitr ustrize….would recommend 🏆'
    },
    {
      id: '9',
      profileImageUrl: '/img/reviews/nenad_milasinovic.png',
      name: 'Nenad Milasinovic',
      rating: 5,
      comment: 'Večkrat sem bil na obisku, ko smo bili na Škofijski Loki. Domen in Matic sta odlična brivca. Brivnica je moderna, čista in dobro razporejena. Več kot zadovoljna s svojimi izkušnjami.'
    },
    {
      id: '10',
      profileImageUrl: '/img/reviews/jakob_zarnik.png',
      name: 'Jakob Zarnik',
      rating: 5,
      comment: 'Odličen kraj za frizuro.'
    },
    {
      id: '11',
      profileImageUrl: '/img/reviews/jas_jamnik.png',
      name: 'Jas Jamnik',
      rating: 5,
      comment: 'Zelo dobro, priporočam'
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
        <div className="w-creen flex flex-col-reverse md:flex-row-reverse ">
            {/* Text Container */}
            
            

            {/* Reviews Container */}
            <div className={`w-full   md:w-1/2 md:h-auto ${showAll ? 'h-auto' : 'h-[93vh]'}   overflow-hidden  md:px-16 py-8 flex  items-center md:justify-center justify-start flex-col xl:flex-row gap-4`}>
                <div className="w-full xl:w-1/2 flex flex-col items-center justify-center gap-4 md:mt-20">
                    {REVIEWS.filter((review) => Number(review.id) <= 5).map((review) => (
                        <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                            <ReviewCard profilImgUrl={review.profileImageUrl} {...review} />
                        </AnimateInViewWrapper>
                    ))}
                </div>

                <div className="w-full xl:w-1/2 flex flex-col gap-4">
                    {REVIEWS.filter((review) => Number(review.id) > 5).map((review) => (
                        <AnimateInViewWrapper key={review.id} scaleFrom={1}>
                            <ReviewCard profilImgUrl={review.profileImageUrl} {...review} />
                        </AnimateInViewWrapper>
                    ))}
                </div>
                
            </div>

            <div className="w-full md:w-1/2 md:h-screen px-4 md:px-16 py-12 md:sticky md:top-0 flex items-center justify-center bg-yellow-circle mobile:bg-mob-yellow-circle">
                <div className="w-full max-w-xl flex flex-col gap-y-4  text-center md:text-left">
                    <MaskAnimation>
                        <h3 className="font-montserrat text-md text-subheader ">Mnenja strank</h3>
                    </MaskAnimation>
                    
                    <MaskAnimation>
                        <h2 className="font-teko text-2xl md:text-3xl  font-bold text-header">
                            Več kot 50+ oseb nam&nbsp; 
                            <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                                zaupa
                            </span>.
                        </h2>
                    </MaskAnimation>
                    
                    <AnimateInViewWrapper scaleFrom={1} delay={0.2}>
                        <p className="font-montserrat text-base text-paragraph">
                            Preberite mnenja naših strank. Naše stranke so bistvo vsega, kar počnemo.
                            Njihovo zadovoljstvo je naš največji uspeh in motivacija za nenehno izboljševanje
                            naših storitev. Prepričajte se sami, zakaj nam zaupajo številni zadovoljni uporabniki.
                        </p>
                    </AnimateInViewWrapper> 
                    
                    
                    <div className='absolute pointer-events-none top-0 right-0 md:right-[-100%] mobile:hidden  w-full h-36 md:h-1/3 z-50 bg-gradient-to-b from-black to-transparent'></div>
                    <div className='absolute pointer-events-none bottom-0 right-0 md:right-[-100%] mobile:hidden  w-full h-36 md:h-1/3 z-50 bg-gradient-to-t from-black to-transparent'></div>
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
