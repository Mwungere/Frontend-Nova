import React from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import SecurityMain from './SecurityMain'
import { Menu } from '@mui/icons-material'

const Security = () => {
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
          <SecurityMain />
        </div>
      </div>
    </div>
  )
}

export default Security
