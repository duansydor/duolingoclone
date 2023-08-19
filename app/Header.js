
import Image from 'next/image';
import React from 'react';
import { AiFillFire } from "react-icons/ai"
import { SiRubygems } from "react-icons/si"
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
function Header(props) {
    return (
        <div className='z-20 sticky top-0 ml-auto mr-auto w-full p-2 h-14 duo-gold border-b-2 border-b-amber-500 grid grid-cols-4 gap-12'>
            <div className=''>
                <Image
                    alt='flag'
                    width={45}
                    height={45}
                    src="/arabic_flag.png"
                    className='rounded-lg'
                />
            </div>
            <div className='flex items-center'>
                <AiFillFire
                    size={35}
                />
                <h1>30</h1>
            </div>
            <div className='flex items-center'>
                <SiRubygems
                    size={35}
                />
                <h1>500</h1>
            </div>
            <div className='flex items-center'>
                <HiOutlineDotsCircleHorizontal
                    size={35}
                />
            </div>
        </div>
    );
}

export default Header;