import Logo from '../assets/svg/Icon.svg';
import Whatsapp from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=96170427505&text&type=phone_number&app_absent=0';
    };

    const handleCallClick = () => {
        window.location.href = 'tel:+96170427505';
    };

    return (
        <div className='flex justify-between items-center p-4 m-4'>
            <div className='flex items-center'>
                <img src={Logo} alt="logo" className='h-9 w-9' />
                <p className='font-bold text-2xl ml-2'>Alo<span className='text-yellow'>Tony</span></p>
            </div>
            <div className='hidden md:flex items-center'>
                <p className='mr-2'>Contact Us:</p>
                <IconButton onClick={handleWhatsAppClick}>
                    <Whatsapp className="cursor-pointer" sx={{color:'#F29F05'}} />
                </IconButton>
                <IconButton onClick={handleCallClick}>
                    <PhoneInTalkIcon className="cursor-pointer" sx={{color:'#F29F05'}} />
                </IconButton>
            </div>
            <div className='md:hidden'>
                <IconButton 
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <ArrowDropDownCircleIcon sx={{ fontSize: '2rem', color: '#F29F05' }} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => {handleClose(); handleWhatsAppClick();}}>
                        <Whatsapp  /> WhatsApp
                    </MenuItem>
                    <MenuItem onClick={() => {handleClose(); handleCallClick();}}>
                        <PhoneInTalkIcon /> Call Us
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header;
