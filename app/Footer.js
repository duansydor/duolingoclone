import React from 'react';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { TiSortAlphabeticallyOutline } from "react-icons/ti"
import { CgGirl, CgGym } from "react-icons/cg"
import { BiShield } from "react-icons/bi"

function Footer(props) {
    return (
        <div className='w-full h-20 fixed bottom-0 grid grid-cols-6 border-t-2 bg-white p-2 pl-6 items-center justify-center'>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <BsFillHouseHeartFill
                    size={35}

                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <TiSortAlphabeticallyOutline
                    size={35}
                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <CgGym
                    size={35}
                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <BiShield
                    size={35}
                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <CgGirl
                    size={35}
                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <HiOutlineDotsCircleHorizontal
                    size={35}
                />
            </button>
        </div>
    );
}

export default Footer;