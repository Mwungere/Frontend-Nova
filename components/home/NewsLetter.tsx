import React from 'react'
import Image from 'next/image'
import { useDarkMode } from '@/app/Context/store'
const NewsLetter = () => {
    const {darkMode} = useDarkMode();
    return (
        <div className=' w-full p-10'>
            <div className={`w-full ${darkMode?'bg-[#22512c]': 'bg-[#B6F8C4]'}  rounded-xl flex mt-18 flex-row justify-around mt-5 py-10`}>
                <div className='px-10 flex'>
                    <div className=' flex flex-col w-1/2'>
                        <Image
                            src='/semicircle.svg'
                            width={40.34}
                            height={18}
                            alt='image'
                            className=' ml-56'
                        />
                        <h1 className={`font-body text-4xl font-bold ${ darkMode ? 'text-[#9CE791]':'text-secondary'} mb-5`}>Subscribe newsletter</h1>
                        <p className={` font-body ${ darkMode ? 'text-[#CBC6BF]':'text-color'} mb-10`}>Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.</p>
                        <div className={` ${darkMode?' bg-[#181A1B]':' bg-white'} w-max px-6 py-5 rounded-lg`}>
                            <form action="https://getform.io/f/ca363283-18e7-4389-9546-f7efa12b2fc0" method="POST">
                                <input type="email" placeholder='Enter email address' className=' font-body' />
                                <button className=' font-body bg-secondary text-white p-4 rounded-lg'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <Image
                            src='/newsletter.svg'
                            width={604}
                            height={482}
                            alt='image'
                            className=' ml-12 '
                        />
                        <Image
                            src='/newsletter2.svg'
                            width={304}
                            height={282}
                            alt='image'
                            className=' absolute -mt-48 ml-20'
                        />
                        <Image
                            src='/newletter3.svg'
                            width={204}
                            height={182}
                            alt='image'
                            className=' absolute -mt-28 ml-32'
                        />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default NewsLetter
