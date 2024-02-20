import logo from '../images/logo.svg'
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className=" w-full flex flex-rol justify-between px-[22px] sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px]">
            <img className='lg:w-[150px] md:w-[150px] sm:w-[140px] w-[120px] max-[376px]:w-[100px]' src={logo} alt="logo-img" />

            <ul className='xl:w-[20%] lg:w-[25%] md:w-[40%] sm:w-[40%] w-[50%] max-[376px]:w-[55%] flex flex-row justify-between items-center'>
                <li className='font-primary font-semibold text-[16px] text-[#d3d3d3] cursor-pointer hover:lg:text-[#ffffff]'>Features</li>
                <li className='font-primary font-semibold text-[16px] text-[#d3d3d3] cursor-pointer hover:lg:text-[#ffffff]'>Team</li>
                <li className='font-primary font-semibold text-[16px] text-[#d3d3d3] cursor-pointer hover:lg:text-[#ffffff]'>Sign In</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;