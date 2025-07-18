import Image from 'next/image';
import React from 'react';
import { IoIosStar } from "react-icons/io";

const ReviewCard = ({
    className='',
    profilImgUrl='/img/review-avatar.png',
    name='Name',
    rating=5,
    comment='comment'
}) => {
   

    return ( 
        <div className={`w-full  h-auto p-8 mobile:p-5 rounded-[2px] gold-shadow transition-all duration-200 bg-dark-bg border border-primary flex justify-start flex-col gap-y-4  z-[-1] ${className}`}>
            <div className='flex items-center gap-x-4'>
                <Image src={`${profilImgUrl}`} width={64} height={64} alt="" className='w-14 h-14 object-cover rounded-[50%]' />
                <h6 className='font-teko text-header text-xl font-medium'>{name}</h6>
            </div>
            <div className='w-full flex realative'>
                {[...Array(rating)].map((_, index) => (
                <IoIosStar 
                    key={index} 
                    className={`h-5 w-5 ${index < rating ? 'text-primary' : 'text-paragraph'}`}
                />
                ))}
            </div>
            {/* Dodajte lahko še komentar ali druge elemente */}
            <p className='font-montserrat text-neutral-200'>{comment}</p>
        </div>
    );
};

export default ReviewCard;
