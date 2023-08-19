import React from 'react';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { TiSortAlphabeticallyOutline } from "react-icons/ti"
import { CgGirl, CgGym } from "react-icons/cg"
import { BiShield } from "react-icons/bi"

function Footer(props) {
    return (
        <div className='w-full h-20 fixed bottom-0 grid grid-cols-6 border-t-2 bg-white p-2 pl-6 items-center justify-center'>
            <BsFillHouseHeartFill
                size={35}
            />
            <TiSortAlphabeticallyOutline
                size={35}
            />
            <CgGym
                size={35}
            />
            <BiShield
                size={35}
            />
            <CgGirl
                size={35}
            />
            <HiOutlineDotsCircleHorizontal
                size={35}
            />

        </div>
    );
}

export default Footer;