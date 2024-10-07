import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
    const icons = [
        {
            icon: <FaFacebook />,
            url: "https://www.facebook.com/"
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/"
        },
        {
            icon: <FaTwitter />,
            url: "https://www.twitter.com/"
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedIn.com/"
        },

    ]
    return (
        <div className=' flex flex-col w-full h-max bg-secondary'>
            <div className=' flex w-full flex-wrap'>
                <div className={` lg:w-1/2 flex flex-col p-10  text-white font-body`}>
                    <h1 className={` font-body text-3xl font-bold mb-5`}>Nova</h1>
                    <p className=' font-body mb-10'>We ensure your garden security when you are at home or not. Wherever you are you can stay update on your house security and you can also monitor everything going on.</p>
                    <div className=' flex gap-5 text-3xl'>
                        {
                            icons.map(({ icon, url }) => (
                                <Link href={url}>
                                    {icon}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className={`flex flex-wrap lg:flex lg:flex-nowrap gap-10 lg:gap-24 p-10 text-white `}>
                    {
                        footerLinks.map(({ title, links }) => (
                            <div key={title}>
                                <h1 className=' font-body text-sm font-bold mb-6'>{title}</h1>
                                <div className=' flex flex-col'>
                                    {links.map(({ title, url }) => (
                                        <div className='' key={title}>
                                            <Link href={url} className=' font-body text-sm'>
                                                {title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>
            <div className={` w-full footerColor  text-white flex justify-between px-10 py-5`}>
                <p className=' font-body'>Copyright &copy; 2023 Nova</p>
                <p className=' font-body'>All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
