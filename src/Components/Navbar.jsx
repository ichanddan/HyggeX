import { Link } from '@nextui-org/react'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-around p-3'>
            <div>
                <img src="/Logo.png" width={120} alt="" />
            </div>
            <div className='flex items-center text-black gap-7'>
                <a href='#'>Home</a>
                <a href='#'>Flashcard</a>
                <a href='#'>Contact</a>
                <a href='#'>Contact</a>
                <a href='#'>FAQ</a>
                <a href='#' className='@apply bg-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] rounded-3xl px-5 py-2 text-white'>Login</a>
            </div>
        </div>
    </div>
  )
}
