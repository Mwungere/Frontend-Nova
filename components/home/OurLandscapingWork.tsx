import React from 'react'
import Image from 'next/image'
import { services } from '@/constants'
const OurLandscapingWork = () => {
  return (
    <div id='services' className=' w-full mt-20 flex flex-col'>
      <div className=' flex '>
        <div className=' ml-10 w-3/4'>
          <h1 className={` font-body text-[#232A42] text-5xl font-bold`}>Our landscaping work and <span className={` font-body text-secondary`}>services</span></h1>
          <p className={` font-body mt-10 text-[#353535]`}>Explore our exceptional landscaping services, where meticulous attention to detail and creative design <br /> converge to transform outdoor spaces.</p>
        </div>
        <Image
          src="/blur.svg"
          width={438}
          height={525}
          alt="image"
          className=" self-end lg:ml-40"
        />
      </div>
      <div className=' flex flex-wrap items-center p-5 gap-10'>
        {
          services.map(({ image, width, height, h, p, sp }) => (
            <div key={h} className={`flex flex-col w-[75%] md:w-[45%] group lg:w-[30%] shadow-2xl p-5 rounded-xl hover:bg-secondary transition-all duration-300 ease-in-out mx-auto`}>
              <Image
                src={image}
                width={width}
                height={height}
                alt=' image'
                className=' text-white'
              />
              <h1 className={`text-[#232A42] group-hover:text-white text-2xl font-semibold lg:text-3xl font-body mt-7 `}>{h}<span className={` text-secondary font-body  group-hover:text-white`}>{sp}</span></h1>
              <p className={`font-body mt-5 text-[#353535] group-hover:text-white`}>{p}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OurLandscapingWork;
