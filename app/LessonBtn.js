
import React from 'react';
import { BsCheck } from "react-icons/bs"

function LessonBtn(props) {
    return (
        <div className='mb-4 border-b-4 border-b-amber-500 rounded-[40px] w-16 h-14 duo-gold'>
            <div className='flex justify-center'>
                <BsCheck
                    size="40px"
                    className='mt-1 text-amber-800'
                />
            </div>
        </div>
    );
}

export default LessonBtn;