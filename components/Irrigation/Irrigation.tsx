"use client"
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import {  WaterDrop } from '@mui/icons-material'
import IrrigationMain from './IrrigationMain'



const Irrigation : React.FC = () => {
  
  return (
    <div className=' w-full h-screen overflow-x-hidden flex'>
          <div className={`hidden relative  w-fit h-fit lg:h-full lg:w-1/4  z-50  lg:block `}>
             <Sidebar />
         </div>
        
      <div className=' w-full lg:w-3/4'>
        <div className=' w-full h-[10%] flex bg-white'>
          <div className=' lg:hidden'><Sidebar /></div>
          <CustomHeader heading='Irrigation' icon={<WaterDrop color='success' />} />
        </div>
        <div className=' w-full h-[90%] bg-[#EDF2FA]'>
          <IrrigationMain  />
        </div>
      </div>
    </div>
  )
}

export default Irrigation
