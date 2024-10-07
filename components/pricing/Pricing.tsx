import React from 'react'
import Image from 'next/image'
import { pricingLinks } from '@/constants'
const Pricing = () => {
  // const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <div className={`w-full flex mt-18 flex-col justify-around py-10  'bg-[#EBEFFF] `}>
      <div className=' absolute -mt-[2400px] hidden ml-[700px] rotate-180'> 
        <Image
        src='/oval.svg'
        width={206}
        height={1}
        alt='image' 
        />
      </div>
      <div className=' mx-auto'>
        <h1 className=' text-5xl px-20  lg:px-56 lg:text-6xl font-body font-bold text-black'>Choose Your Plan</h1>
        <div className=' flex border my-8 lg:my-12'>
          <p className=' bg-white w-1/2 py-5 px-24 lg:px-52 font-body'>Monthly</p>
          <p className=' bg-[#D3E7F0]  w-1/2 py-5 px-12 lg:px-40 self-end font-body'>Yearly <span className=' font-body text-color'>(Save 2.5%)</span></p>
        </div>
        <p className=' text-4xl lg:text-5xl font-body text-black lg:ml-40 lg:mt-3'>Best Plans For <span className=' font-body font-semibold'>Office Management</span></p>
      </div>
      <div className=' flex flex-col lg:flex-row gap-16 mt-5 lg:mt-10 mx-auto p-8'>
        {
          pricingLinks.map(({ title, icon, width, height, p, currency, amount, rate, included }) => (
            <div key={title} className='w-[367px] h-max p-8 shadow-xl hover:shadow-2xl bg-white hover:borderColor faintBorder  group rounded-xl items-center'>
              <div className=' flex gap-4 mb-5 mx-auto'>
                <Image src={icon} width={width} height={height} alt='icon' className=' w-8 lg:w-10'/>
                <h1 className=' text-2xl lg:text-3xl font-bold font-body'>{title}</h1>
              </div>
              <p className=' font-body text-color mb-3'>{p}</p>
              <p className=''><span className='font-body font-bold text-color text-xl'>{currency} </span><span className='font-body mr-16 font-bold text-3xl'>{amount}</span><span className='font-body font-bold text-color text-md'>{rate}</span></p>
              <button className=' px-20 py-2 mt-4 ml-2 mb-5 rounded-lg bg-secondary group-hover:bg-opacity-100 bg-opacity-25 text-white font-body'>
                Get Started
              </button>
              <div>
                <h1 className=' font-body font-semibold text-2xl mb-3'>Nova includes:</h1>
                <div>
                  {
                    included.map(({p}) => (
                      <div key={p} className=' flex gap-2 mb-4'>
                        <Image src="/tick.svg" width={20} height={20} alt='icon'/>
                        <p className=' font-body text-color'>{p}</p>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          ))
        }
      </div>
      <div className=' absolute -mb-[1950px] lg:-mb-[680px]'> 
        <Image
        src='/oval.svg'
        width={150}
        height={1}
        alt='image' 
        />
      </div>
    </div>
  )
}

export default Pricing
