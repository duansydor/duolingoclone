"use client"
import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs"

function LessonBtn(props) {
    const [getMouseState, setMouseState] = useState("border-b-8");
    const mouseUp = () => {
        setMouseState("border-b-8")
    }
    const mouseDown = () => {
        setMouseState("border-b-0")
    }
    return (
        <button className={'mb-4 border-b-amber-500 rounded-[30px] w-16 h-14 duo-gold ' + getMouseState}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
        >
            <div className='flex justify-center'>
                <BsCheck
                    size="40px"
                    className='mt-1 text-amber-800'
                />
            </div>
        </button>
    );
}

export default LessonBtn;