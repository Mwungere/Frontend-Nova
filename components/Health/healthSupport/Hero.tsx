import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-full flex flex-col'>
      <div className=' w-full h-[80%] relative'>
        {/* <div className=' w-full h-full bg-gradient-to-t bg-opacity-85 from-black' /> */}
        <img
          src='/text.svg'
          alt="img"
          className=' w-full h-full object-cover object-center'
        />
      </div>
      <div className=' w-full flex justify-center items-center '>
        <div className=' flex bg-white justify-center items-center rounded-xl space-x-10 p-3 -mt-16 z-50  md:w-[850px] lg:w-[1000px]'>
          <div className=' flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-3 lg:flex-1'>
            <img src="/guidance.svg" alt="img"  className=' w-10 mb-2 md:w-20'/>
            <div className=' flex flex-col'>
              <h1 className=' text-sm font-bold font-body md:text-lg'>Guidance</h1>
              <p className=' text-[12px] font-body md:text-[14px] text-color'>Care your plants</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-start border-l-2 pl-3 md:items-center md:space-x-3 lg:flex-1'>
            <img src="/truck.svg" alt="img" className=' w-10 my-4 md:w-20'/>
            <div className=' flex flex-col'>
              <h1 className=' text-sm font-body font-bold md:text-lg'>Products</h1>
              <p className=' text-[12px] font-body md:text-[14px] text-color'>All necessities</p>
            </div>
          </div>
          <div className=' flex flex-col md:flex-row justify-center items-start border-l-2 pl-3 md:items-center md:space-x-3 lg:flex-1'>
            <img src="/location.svg" alt="img" className=' w-10 mb-2 md:w-20' />
            <div className=' flex flex-col'>
              <h1 className=' font-body font-bold text-sm md:text-lg'>Store Location</h1>
              <p className=' font-body text-[12px] md:text-[14px] text-color'>Find Your Nearest Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero