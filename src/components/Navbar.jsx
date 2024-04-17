import React from 'react';
import logo from '../assets/output.png';
import profileImg from '../assets/profile-pic.jpg';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='max_padd_container flexBetween bg-black py-2 px-4 ring-1 ring-white relative'>
        <div className='font-anta text-white'>
            <img src={logo} alt="logo" height={66} width={66} /> ShoeMonkey
        </div>
        <div className='font-anta text-white bold-22 bg-[#7905bc]/60 px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1'>ADMIN PANEL</div>
        <div><img src={profileImg} alt='profile-pic' className='h-12 w-12 rounded-full'/></div>
    </nav>
  )
}

export default Navbar