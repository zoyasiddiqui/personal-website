import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#D9D9D933] h-[10vh] w-screen'>
        <div className='flex flex-row justify-between items-center'>
            <div className='w-[30vh] flex flex-row items-center mx-4 border'>
                <h1>LOGO HERE</h1>
            </div>
            <div className='w-[70vh] flex flex-row items-center justify-between mx-4 border'>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Videos</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Blog</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Writing</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>My Media</button>
                <button className='font-[family-name:var(--font-micro)] text-4xl'>Kofi</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar