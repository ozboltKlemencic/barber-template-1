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
        <div className={`w-full  h-auto p-8 mobile:p-5 rounded-[2px] bg-black border border-yellow-200/[0.8] flex justify-start flex-col gap-y-4  z-0 ${className}`}>
            <div className='flex items-center gap-x-4'>
                <Image src={`${profilImgUrl}`} width={32} height={32} alt="" className='w-14 h-14 object-cover rounded-[50%]' />
                <h6 className='font-teko text-neutral-50 text-xl font-medium'>{name}</h6>
            </div>
            <div className='w-full flex realative'>
                {[...Array(rating)].map((_, index) => (
                <IoIosStar 
                    key={index} 
                    className={`h-5 w-5 ${index < rating ? 'text-yellow-200' : 'text-gray-300'}`}
                />
                ))}
            </div>
            {/* Dodajte lahko še komentar ali druge elemente */}
            <p className='font-montserrat text-neutral-200'>{comment}</p>
        </div>
    );
};

export default ReviewCard;
