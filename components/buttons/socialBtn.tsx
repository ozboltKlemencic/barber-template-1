import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons'; // Uvozimo tip za React ikone

interface Props {
  Icon: IconType; // Sprejme React ikono kot komponento
  link: string;   // Povezava za socialno omrežje
}

const SocialBtn: React.FC<Props> = ({ Icon, link }) => {
  return (
    <div>
      <Link
        href={link}
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex justify-center items-center w-[30px] h-[30px]  hover:bg-neutral-800 transition duration-500 ease-in-out relative group/insta overflow-hidden tablet:scale-[0.7] cursor-pointer"
      >
        <Icon className="w-[20px] h-[20px] text-header group-hover/insta:text-gold transition duration-500 ease-in-out" ></Icon>
        <span className="bg-header rotate-[120deg] shadow-white-light absolute left-[-400%] w-40 h-[40px] opacity-50 group-hover/insta:left-[50%] duration-500 ease-in-out shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      </Link>
    </div>
  );
};

export default SocialBtn;
