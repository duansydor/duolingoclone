import React from 'react';
import LessonBtn from './LessonBtn';
import { GiChest } from "react-icons/gi"
import { FaEarlybirds } from "react-icons/fa"
function Unity(props) {
    return (
        <div className='w-full'>
            <div className=' p-2 h-20 duo-gold text-amber-900'>
                <h1 className='text-2xl font-bold'>Unit 1 </h1>
                <p className='text-lg'>Pair letters and sounds, identify names</p>
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
                            className='z-0 absolute right-8  text-green-600 '
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