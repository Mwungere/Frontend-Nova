import React from 'react'
import { Menu } from '@mui/icons-material'
import Sidebar from '@/components/Sidebar'
import CustomHeader from '@/components/CustomHeader'
import CamControlsMain from './CamControlsMain'

const CamControls = () => {
  return (
    <div className=' w-full h-full flex'>
      <div className={` hidden relative w-fit lg:h-full lg:w-1/4 lg:block`}>
        <Sidebar />
      </div>
      <div className=' w-full lg:w-3/4'>
        <div className=' w-full h-[10%] flex bg-white'>
          <div className=' lg:hidden'><Sidebar /></div>
          <CustomHeader heading='Security' icon={<Menu color='success' />} />
        </div>
        <div className=' w-full h-[90%] bg-[#EDF2FA]'>
          <CamControlsMain />
        </div>
      </div>
    </div>
  )
}

export default CamControls
