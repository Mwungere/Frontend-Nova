import CustomHeader from '@/components/CustomHeader'
import Sidebar from '@/components/Sidebar'
import { LocalFlorist, MoreVert } from '@mui/icons-material'
import React from 'react'
import HealthNutrientsMain from './HealthNutrientsMain'
const HealthNutrients = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen flex overflow-hidden'>
      <div className="hidden relative  w-fit h-fit lg:h-full lg:w-1/4  z-50  lg:block">
        <Sidebar />
      </div>
      <div className="  w-full lg:w-3/4 flex flex-col">
        <div className=" w-full h-[100px] flex bg-white">
          <div className=' mt-8 sm:mt-0 lg:hidden'><Sidebar /></div>
          <CustomHeader
            heading="Health"
            icon={<LocalFlorist color="success" />}
            menuIcon={<MoreVert color="success" />}
            subHeading='Crops care'
          />
        </div>

        {/* main content */}
        <div className='w-full flex-1 flex flex-col bg-[#EDF2FA] p-2'>
          <HealthNutrientsMain />
        </div>
      </div>
    </div>
  )
}

export default HealthNutrients