import React from 'react'
import Image from 'next/image'
import { useDarkMode } from '@/app/Context/store'
const GetToKnowAboutUs = () => {
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <div className=' w-full flex flex-col'>
      <div className=' w-full flex mt-18 flex-col md:flex-row-reverse justify-around mx-auto py-10'>
        <div className='flex-1 lg:mr-40 lg:mt-[45px]'>
          <h1 className={`${darkMode ? 'text-[#9CE791]':'text-secondary'} font-body font-bold text-4xl mt-10 mb-4 lg:text-6xl lg:mb-7`}>Get To Know More <br /> About Us!</h1>
          <p className={`${darkMode ? 'text-[#CBC6BF]':'text-[#2f2e2e]'} font-body lg:text-xl`}>
            Established in 2023 by a dedicated group of five individuals, the Nova Project has evolved into a remarkable endeavor. Through our innovative Nova product, we've grown to become one of Africa's most successful initiatives, benefiting over three million people on the continent. But our journey continues. We're committed to expanding our services worldwide, with a mission to make our services accessible and affordable to citizens across the globe, from Africa to America, Asia, Antarctica, and Europe. Our dedication to making a positive global impact knows no bounds.
          </p>
          <button className=' bg-secondary text-white p-3 px-20 rounded-3xl flex gap-10 mx-auto my-3  lg:mt-4 font-body'>
            <span className={`${darkMode ? 'text-[#CBC6BF]' : ' text-white'}`}>Get started</span>
            <Image
              src='/arrow.svg'
              width={25.15}
              height={14.8}
              alt='arrow'
              className=' mt-1 '
            />
          </button>
        </div>
        <div className='flex-1 lg:ml-40'>
          <Image
            src='/farmer.svg'
            width={482}
            height={537}
            alt='farmer'
            className=' lg:w-[600px]'
          />
        </div>
      </div>
      <div className='flex flex-wrap md:flex-row w-full justify-around mb-20 items-center'>
        <div className='flex-col  md:border-r-2 border-[#525252] pr-8'>
          <h1 className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'} text-4xl lg:text-5xl font-medium mb-4 ml-5`}>15+</h1>
          <p className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'}`}>Years Experience</p>
        </div>
        <div className='flex-col md:border-r-2 border-[#525252] pr-12'>
          <h1 className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'} text-4xl lg:text-5xl font-medium mb-4`}>2k+</h1>
          <p className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'}`}>Products</p>
        </div>
        <div className='flex-col md:border-r-2 border-[#525252] pr-16'>
          <h1 className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'} text-4xl lg:text-5xl font-medium mb-4 ml-5`}>5k+</h1>
          <p className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'}`}>Satisfied Clients</p>
        </div>
        <div className='flex-col'>
          <h1 className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'} text-4xl lg:text-5xl font-medium mb-4 ml-9`}>5+</h1>
          <p className={`font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'}`}>Local Team Members</p>
        </div>
      </div>

    </div>
  )
}

export default GetToKnowAboutUs
