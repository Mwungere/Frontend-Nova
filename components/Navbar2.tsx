"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { NavButton } from '.';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        {
            desc: 'Home',
            link: '/home'
        },
        {
            desc: 'About Us',
            link: '/about'
        },
        {
            desc: 'Services',
            link: '/services'
        },
        {
            desc: 'Pricing',
            link: '/pricing'
        },
         
        {
            desc: 'Contact Us',
            link: '/contacts'
        },
        {
            desc: 'Signup!',
            link: '/signup'
        },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [open, setOpen] = useState(false)

    return (
        <div className={` shadow-sm w-full ${open ? 'fixed': ''} top-0 left-0`}>
            <div className=' md:flex items-center justify-between bg-white py-4 px-20'>
                <div className='flex font-bold cursor-pointer items-center font-body'>
                    <Image
                        src="/logo.svg"
                        width={70}
                        height={70}
                        className=' object-contain'
                        alt='logo'
                    />
                    <h1
                        className=' text-black font-body mt-5 ml-2 text-2xl font-semibold'
                    >Nova</h1>
                </div>
                <div onClick={() =>setOpen(!open) } className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <FaTimes />: <FaBars />}
                </div>
                <ul className={` md:flex   md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${open? 'top-20 opacity-100 bg-gray-900': 'top-[-490px] md:opacity-100 opacity-0'}`}>
                     {
                        links.map(({desc, link}) => (
                            <li key={desc} className='md:ml-6 lg:ml-8 md:my-0 my-7'>
                                <Link href={link} className=' font-body text-xl text-secondary hover:text-green-300 duration-500'>
                                    {desc}
                                </Link>
                            </li>
                        ))
                     }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
