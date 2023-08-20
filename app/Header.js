"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillFire } from "react-icons/ai"
import { SiRubygems } from "react-icons/si"
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { BsFillTriangleFill } from 'react-icons/bs';
function Header(props) {
    const [headerState, getHeader] = useState("");
    function openDialog(dialog) {
        console.log(dialog)
    }
    return (
        <div className='z-20 sticky top-0 ml-auto mr-auto w-full p-2 h-14 duo-gold border-b-2 border-b-amber-500 grid grid-cols-4 gap-12'>
            <button className='relative group'
                onClick={() => { openDialog("opa") }}
            >
                <Image
                    alt='flag'
                    width={45}
                    height={45}
                    src="/arabic_flag.png"
                    className='rounded-lg'
                />
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10  absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='p-3 group hidden fixed left-0 mt-3 w-full h-24 bg-slate-100 group-focus:flex'>
                    Language
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-24 bg-black opacity-50'>

                    </div>
                </div>

            </button>
            <button className='relative group grid grid-cols-2 '
                onClick={() => { openDialog("opa2") }}
            >
                <AiFillFire
                    size={35}
                />
                <h1 className='self-center'>30</h1>
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 mt-9 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='p-3 group hidden fixed left-0 mt-[3.05rem] w-full h-24 bg-slate-100 group-focus:flex'>
                    Streak
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-24 bg-black opacity-50'>

                    </div>
                </div>
            </button>
            <button className='relative group grid grid-cols-2'>
                <SiRubygems
                    size={35}
                />
                <h1 className='self-center ml-2'>500</h1>
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 mt-9 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='p-3 group hidden fixed left-0 mt-[3.05rem] w-full h-24 bg-slate-100 group-focus:flex'>
                    Lingots
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-24 bg-black opacity-50'>

                    </div>
                </div>
            </button>
            <button className='relative group'>
                <HiOutlineDotsCircleHorizontal
                    size={35}
                />
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='p-3 group hidden fixed left-0 mt-3 w-full h-24 bg-slate-100 group-focus:flex'>
                    Other
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-24 bg-black opacity-50'>

                    </div>
                </div>
            </button>
        </div>
    );
}

export default Header;