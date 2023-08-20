import React from 'react';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { TiSortAlphabeticallyOutline } from "react-icons/ti"
import { CgGirl } from "react-icons/cg"
import { CgGym } from "react-icons/cg"
import { BiShield } from "react-icons/bi"
import { GiChest } from 'react-icons/gi';

function Footer(props) {
    return (
        <div className='w-full h-20 fixed bottom-0 grid grid-cols-6 border-t-2 bg-gray-300 p-2 pl-6 items-center justify-center'>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <BsFillHouseHeartFill
                    size={35}
                    className='text-red-600'
                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <TiSortAlphabeticallyOutline
                    size={35}
                    className='text-blue-600'

                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <CgGym
                    size={35}
                    className='text-blue-600'

                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <BiShield
                    size={35}
                    className='text-amber-800'

                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <GiChest
                    size={35}
                    className='text-amber-800'

                />
            </button>
            <button className='focus:ring focus:ring-offset-blue-600 w-fit p-1 rounded-md'>
                <CgGirl
                    size={35}
                    className='text-red-600'

                />
            </button>
        </div>
    );
}

export default Footer;