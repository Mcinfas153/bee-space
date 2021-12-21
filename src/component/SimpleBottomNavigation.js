import React, { useState } from 'react'
import { AiFillHome, AiFillAppstore, AiFillBulb, AiFillSignal } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {

    const [activeColor, setActiveColor] = useState('')

    const selectTab = () => {
        console.log('Clicked')
    }

    return (
        <div className='fixed inset-x-0 bottom-0 w-full'>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around'>
                <Link to="/">
                    <div className='flex flex-col place-items-center px-5 py-3 active:bg-green-900' onClick={() => selectTab(this)}>
                        <AiFillHome size={24} color='white' className='hover:cursor-pointer' />
                        <p className='text-white text-xs mt-2 tracking-widest font-semibold uppercase'>Home</p>
                    </div>
                </Link>
                <Link to="/list">
                    <div className='flex flex-col place-items-center px-5 py-3 active:bg-green-900' onClick={() => selectTab()}>
                        <AiFillAppstore size={24} color='white' className='hover:cursor-pointer' />
                        <p className='text-white text-xs mt-2 tracking-widest font-semibold uppercase'>Objects</p>
                    </div>
                </Link>
                <Link to="/news">
                    <div className='flex flex-col place-items-center px-5 py-3 active:bg-green-900' onClick={() => selectTab()}>
                        <AiFillBulb size={24} color='white' className='hover:cursor-pointer' />
                        <p className='text-white text-xs mt-2 tracking-widest font-semibold uppercase'>News</p>
                    </div>
                </Link>
                <Link to="/test">
                    <div className='flex flex-col place-items-center px-5 py-3 active:bg-green-900' onClick={() => selectTab()}>
                        <AiFillSignal size={24} color='white' className='hover:cursor-pointer' />
                        <p className='text-white text-xs mt-2 tracking-widest font-semibold uppercase'>Space</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
