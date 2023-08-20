import React from 'react';
import LessonBtn from './LessonBtn';
import { GiChest, GiNotebook } from "react-icons/gi"
import { FaEarlybirds } from "react-icons/fa"
function Unity(props) {
    return (
        <div className='w-full'>
            <div className=' p-4 h-fit duo-gold text-amber-900'>
                <h1 className='text-2xl font-bold'>Unit 1 </h1>

                <div className='w-full grid grid-cols-3 items-center'>
                    <p className='text-lg w-auto col-span-2 '>Pair letters and sounds, identify names</p>
                    <div className='ml-auto mr-2 border-2 p-1 border-amber-500 rounded-md'>
                        <GiNotebook
                            size={40}
                            className=''
                        />
                    </div>
                </div>
            </div>
            <div className='w-fit ml-auto mr-auto'>
                <div className='mt-8'>
                    <div className=''>
                        <LessonBtn />

                    </div>
                    <div className='-ml-10'>
                        <LessonBtn />
                    </div>
                    <div>
                        <LessonBtn />
                    </div>
                    <div className='flex'>
                        <GiChest
                            size="60px"
                            className='mb-4 rounded-full p-1 text-amber-500 bg-amber-800'
                        />
                        <FaEarlybirds
                            size="60px"
                            className='z-0 absolute right-8  text-green-400 '
                        />
                    </div>

                    <div className=''>
                        <LessonBtn />

                    </div>
                    <div className='-ml-10'>
                        <LessonBtn />
                    </div>
                    <div>
                        <LessonBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unity;