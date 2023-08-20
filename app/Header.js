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
        <div className='z-20 sticky top-0 ml-auto mr-auto w-full p-2 h-14 duo-gold border-b-2 border-b-amber-800 grid grid-cols-4 gap-12'>
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
                <div className='z-20 hidden p-4 h-max group fixed left-0 mt-3 w-full bg-slate-100 group-focus:flex'>
                    <div className='grid grid-cols-5 h-24 gap-4'>

                        <div className=' justify-center mt-auto mb-auto'>
                            <Image
                                alt='course flag'
                                width={80}
                                height={80}
                                src="/arabic_flag.png"
                                className='rounded-lg'

                            />
                            <h1 className='flex-start ml-auto'>Arabic</h1>
                        </div>
                        <div className=' justify-center mt-auto mb-auto'>
                            <Image
                                alt='course flag'
                                width={80}
                                height={80}
                                src="/chinese_flag.png"
                                className='rounded-lg'

                            />
                            <h1 className='flex-start ml-auto'>Chinese</h1>
                        </div>
                        <div className=' justify-center mt-auto mb-auto '>
                            <Image
                                alt='course flag'
                                width={80}
                                height={80}
                                src="/japanese_flag.png"
                                className='rounded-lg border-gray-500 border-2'

                            />
                            <h1 className='flex-start ml-auto'>Japanese</h1>
                        </div>
                    </div>
                    <div className='z-0 pointer-events-none absolute w-full h-screen left-0 top-32 bg-black opacity-50'></div>

                </div>

            </button>
            <button className='relative group grid grid-cols-2 '
                onClick={() => { openDialog("opa2") }}
            >
                <AiFillFire
                    size={35}
                    className='text-orange-700'
                />
                <h1 className='self-center'>30</h1>
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 mt-9 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='h-32 p-4 group hidden fixed left-0 mt-[3.05rem] w-full bg-slate-100 group-focus:flex'>
                    Streak
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-32 bg-black opacity-50'>

                    </div>
                </div>
            </button>
            <button className='relative group grid grid-cols-2'>
                <SiRubygems
                    size={35}
                    className='text-red-600'
                />
                <h1 className='self-center ml-2'>500</h1>
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 mt-9 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='h-32 p-4 gap-4 group hidden fixed left-0 mt-[3.05rem] w-full bg-slate-100 group-focus:flex'>
                    Lingots
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-32 bg-black opacity-50'>

                    </div>
                </div>
            </button>
            <button className='relative group'>
                <HiOutlineDotsCircleHorizontal
                    size={35}
                    className=''

                />
                <BsFillTriangleFill
                    size={15}
                    className='hidden z-10 absolute left-1/4 text-white group-focus:inline-block'
                />
                <div className='h-32 p-4 group hidden fixed left-0 mt-3 w-full bg-slate-100 group-focus:flex'>
                    Other
                    <div className='pointer-events-none absolute w-full h-screen left-0 top-32 bg-black opacity-50'>

                    </div>
                </div>
            </button>
        </div>
    );
}

export default Header;