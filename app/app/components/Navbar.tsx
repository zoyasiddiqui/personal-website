"use client"
import React from 'react'
import ProfileButton from './ProfileButton'

const Navbar = () => {

  return (
    <nav className='bg-[#D9D9D933] h-[10vh] w-screen'>
        <div className='flex flex-row items-center justify-between'>
            <div className='w-[40%] h-full flex flex-row items-center m-4 p-4'>
                <h1>LOGO HERE</h1>
            </div>
            <div className='w-[60%] h-full flex flex-row items-center justify-between mr-8'>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Videos</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Blog</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Writing</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>My Media</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Kofi</button>
                <ProfileButton/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar