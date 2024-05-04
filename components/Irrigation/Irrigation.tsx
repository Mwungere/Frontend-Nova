import React from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import { WaterDrop } from '@mui/icons-material'
import IrrigationMain from './IrrigationMain'
import { useDarkMode } from '@/app/Context/store'
import { SensorDataType } from '@/app/irrigation/page'


interface IrrigationProps {
  sensorData: SensorDataType[]; // Assuming SensorData is the interface for your sensor data
}

const Irrigation : React.FC<IrrigationProps> = ({sensorData}) => {
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
          <IrrigationMain sensorData= {sensorData}/>
        </div>
      </div>
    </div>
  )
}

export default Irrigation
