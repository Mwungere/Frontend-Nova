import React from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import { WaterDrop } from '@mui/icons-material'
import IrrigationMain from './IrrigationMain'
import { useDarkMode } from '@/app/Context/store'

const Irrigation = () => {
  // const {darkMode} = useDarkMode()
  return (
    <div className=' w-full h-screen overflow-x-hidden flex'>
      <div className=' w-1/4'>
        <Sidebar />
      </div>
      <div className=' w-3/4'>
        <div className=' w-full h-[10%]'>
          <CustomHeader heading='Irrigation' icon={<WaterDrop color='success' />} />
        </div>
        <div className=' w-full h-[90%] bg-[#EDF2FA]'>
          <IrrigationMain />
        </div>
      </div>
    </div>
  )
}

export default Irrigation
