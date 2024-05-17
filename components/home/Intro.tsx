import React from 'react'
import Image from 'next/image'
import { useDarkMode } from '@/app/Context/store'
const Intro = () => {
    const {darkMode} = useDarkMode()
    return (
        <div className=' font-body flex flex-col lg:flex-row items-center mx-auto px-20 py-10'>
            <div className=' flex flex-col flex-1 lg:mt-36 mt-44'>
                
                <div className=''>
                    <h1 className={` font-body ${darkMode? 'text-[#9CE791]':' text-secondary'} font-semibold text-3xl lg:text-6xl mb-5`}>
                        Want To Monitor And <br />
                        Ensure <span className={` text-4xl font-body text-transparent font-bold lg:text-5xl ${darkMode? 'text-strokeDarkMode':'text-stroke'}`}>
                            Your Farm
                        </span> <br />Security. <br /></h1>
                    <p className={`${darkMode? 'text-[#9CE791]':'text-secondary'} font-body font-semibold text-2xl lg:text-3xl mb-5`}>Easily Here</p>
                    <p className={` ${darkMode?'text-[#CBC6BF]':'text-[#2f2e2e]'} font-body lg:text-xl lg:mt-20`}>Need to ensure that your farm or garden is thriving, whether you're there or not? Eager to monitor every activity taking place  your agricultural haven? Look no further - we've got you covered. Our advanced farm monitoring system provides real-time insights into your garden's health and growth. Whether you're cultivating crops, nurturing plants, or raising livestock, our technology ensures that your agricultural pursuits are secure and flourishing, <br /> giving you peace of mind even when you're away.</p>
                </div>
                <div className=' flex mt-20 mx-auto lg:ml-5 gap-10'>
                    <button className={`${darkMode? ' border-[#3dda40]':''} flex gap-3 border-2 border-secondary rounded-md bg-secondary p-3 lg:px-10`}>

                        <Image
                            src="/apple.svg"
                            width={24}
                            height={29}
                            alt='apple'
                            className=' lg:w-6 lg:mt-3'
                        />
                        <div className=' text-white lg:mt-2'>
                            <p className='font-body text-sm'>Available on the</p>
                            <h1 className='font-body font-bold text-xl'>App Store</h1>
                        </div>

                    </button>
                    <button className={` ${darkMode? ' bg-transparent border-[#5e5e5f]':' bg-white'}  border-2 rounded-md shadow-xl p-3 lg:px-10 flex gap-3 `}>

                        <Image
                            src="/playstore.svg"
                            width={24}
                            height={29}
                            alt='apple'
                            className=' lg:w-6 lg:mt-3'
                        />
                        <div className='lg:mt-2'>
                            <p className={` ${darkMode? ' text-[#CBC6BF]':''} font-body text-sm`}>Available on the</p>
                            <h1 className={`${darkMode? ' text-[#CBC6BF]':''} font-body font-bold text-xl`}>Play Store</h1>
                        </div>


                    </button>
                </div>

            </div>
            <div className='flex flex-col h-auto'>
                <div className=' w-[460px] h-[460px] lg:w-[550px] lg:h-[550px] lg:p-5 p-10 rounded-full border-[1px] border-secondary lg:mt-16 mt-10 lg:self-center items-center'>
                    <div className={`w-[400px] h-[400px] rounded-full  ${darkMode? 'bg-[#3B4933]':'bg-circular'} lg:w-[478px] lg:h-[478px] lg:mx-auto lg:my-auto lg:mt-2 items-center pt-7 lg:pt-12`}>
                        <Image
                            src="/garden.png"
                            width={340}
                            height={340}
                            className=' rounded-full mx-auto  lg:w-[384px] lg:h-[384px]'
                            alt='garden' />
                    </div>
                    <div className=' absolute -mt-96 lg:-mt-[455px] ml-[350px] lg:ml-[430px]'>
                        <Image
                            src="/more.png"
                            width={50}
                            height={50}
                            className='lg:w-16'
                            alt='more'
                        />
                    </div>
                    <div className=' absolute -mt-24 -ml-4 lg:-ml-1 border-[1px] w-12 h-12 lg:w-14 lg:h-14 bg-secondary rounded-full'>
                        <Image
                            src="/volume.png"
                            width={27}
                            height={40}
                            className='mx-auto py-2.5 lg:w-8 lg:h-12 lg:py-3'
                            alt='volume'
                        />
                    </div>
                    <div className=' absolute ml-[310px] lg:ml-[420px] -mt-11 lg:-mt-14 border-[1px] w-12 h-12 bg-secondary rounded-full'>
                        <Image
                            src="/camera.png"
                            width={27}
                            height={40}
                            className='mx-auto py-2.5'
                            alt='camera'
                        />
                    </div>
                    <div className=' absolute -mt-[360px] lg:-mt-[455px] -ml-12 lg:ml-4 border-[1px] w-14 h-14 bg-secondary rounded-full'>
                        <Image
                            src="/bulb.png"
                            width={27}
                            height={38}
                            className=' mx-auto py-3 lg:w-10 lg:h-14 lg:py-3'
                            alt='bulb'
                        />
                    </div>
                    <div className=' absolute -mt-64 ml-[380px] lg:ml-[476px]'>
                        <Image
                            src="/heart.png"
                            width={30}
                            height={40}
                            alt='heart'
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Intro
