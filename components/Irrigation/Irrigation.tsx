import React from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import { WaterDrop } from '@mui/icons-material'
import IrrigationMain from './IrrigationMain'

const Irrigation = () => {
  return (
    <div className=' w-full h-max flex'>
      <div className=' w-1/4 h-screen'>
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
