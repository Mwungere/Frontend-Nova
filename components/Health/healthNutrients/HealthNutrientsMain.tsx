"use client";
import { foodCrops } from '@/constants';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const HealthNutrientsMain = () => {
  const slide = (id:string, offset: number) => {
    const slider = document.getElementById(id);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + offset;
    }
  };

  return (
    <div className='w-full flex-1 flex flex-col items-center'>
      <div className='w-full flex'>
        <h1 className='font-body font-bold text-xl my-4'>
          Needed Nutrients for your crops
        </h1>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl md:rounded-xl md:p-1 md:px-2 lg:px-4 lg:p-3 mb-3'>
        <h1 className='font-body font-semibold text-lg hidden md:flex'>
          Food Crops
        </h1>
        <div className='w-full md:w-[400px] flex justify-center items-center border rounded-3xl pl-5 pr-2 md:bg-[#EDF2FA]'>
          <input
            type='text'
            className='h-full w-full rounded-3xl outline-none font-body md:bg-[#EDF2FA]'
            placeholder='Search food crops...'
          />
          <IconButton>
            <Search sx={{ fontSize: '30px' }} />
          </IconButton>
        </div>
      </div>

      {/* Slider with buttons */}
      <div className='relative flex items-center w-full group'>
        {/* Left button */}
        <MdChevronLeft
          onClick={() => slide('foodCropsSlider',-300)}
          className='bg-white rounded-full absolute left-2 text-gray-700 z-10 cursor-pointer shadow-md p-1 md:p-2 hidden group-hover:block'
          size={40}
        />
        {/* Image Slider */}
        <div
          id='foodCropsSlider'
          className='flex  w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'
        >
          {foodCrops.map((crop) => (
            <div key={crop.id} className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0 p-2'>
              <img
                src={crop.img}
                alt={crop.name}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
        {/* Right button */}
        <MdChevronRight
          onClick={() => slide('foodCropsSlider',300)}
          className='bg-white rounded-full absolute right-2 text-gray-700 z-10 cursor-pointer shadow-md p-1 md:p-2 hidden group-hover:block' 
          size={40}
        />
      </div>



      {/* cash crops */}


      <div className='w-full flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl md:rounded-xl md:px-2 md:p-1 lg:px-4 lg:p-3 mb-3 mt-14 md:mt-2'>
        <h1 className='font-body font-semibold text-lg hidden md:flex'>
          Cash Crops
        </h1>
        <div className='w-full md:w-[400px] flex justify-center items-center border rounded-3xl pl-5 pr-2 md:bg-[#EDF2FA]'>
          <input
            type='text'
            className='h-full w-full rounded-3xl outline-none font-body md:bg-[#EDF2FA]'
            placeholder='Search cash crops...'
          />
          <IconButton>
            <Search sx={{ fontSize: '30px' }} />
          </IconButton>
        </div>
      </div>

      {/* Slider with buttons */}
      <div className='relative flex items-center w-full group'>
        {/* Left button */}
        <MdChevronLeft
          onClick={() => slide('cashCropsSlider', -300)}
          className='bg-white rounded-full absolute left-2 text-gray-700 z-10 cursor-pointer shadow-md p-1 md:p-2 hidden group-hover:block'
          size={40}
        />
        {/* Image Slider */}
        <div
          id='cashCropsSlider'
          className='flex  w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'
        >
          {foodCrops.map((crop) => (
            <div key={crop.id} className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0 p-2'>
              <img
                src={crop.img}
                alt={crop.name}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
        {/* Right button */}
        <MdChevronRight
          onClick={() => slide('cashCropsSlider', 300)}
          className='bg-white rounded-full absolute right-2 text-gray-700 z-10 cursor-pointer shadow-md p-1 md:p-2 hidden group-hover:block' 
          size={40}
        />
      </div>


    </div>
  );
};

export default HealthNutrientsMain;
