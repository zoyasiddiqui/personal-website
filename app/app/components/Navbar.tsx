import React from 'react'
import { IoPerson } from "react-icons/io5";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  
  // authentication related stuff, for conditional dropdown
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  // TODO: useEffect to check authentication

  // other stuff for dropdown
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);

  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleHover}
                  >
                    <IoPerson className='text-2xl'/>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar