import Irrigation from '@/components/Irrigation/Irrigation'
import { sensorData } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className=' w-[100vw] h-[10vh]'>
        <Irrigation sensorData={sensorData} />
    </div>
  )
}

export default page