"use client"
import React from 'react'
import { IoPerson } from "react-icons/io5";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProfileButton = () => {

    // authentication related stuff, for conditional dropdown
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
    // TODO: useEffect to check authentication

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);

    const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // TODO: change this up once we want to reroute on click
    const handleClose = () => {
        setAnchorEl(null);
    };

    // TODO: add functionality for button when user is authneticated
    return (
        <div>
            {isAuthenticated ? 
                <button><IoPerson className='text-2xl text-white'/></button>
            : 
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleHover}
                    >
                        <IoPerson className='text-2xl text-white'/>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Menu>
                </div>
            }
        </div>
    )
}

export default ProfileButton