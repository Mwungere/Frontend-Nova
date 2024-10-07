import CustomHeader from '@/components/CustomHeader'
import Sidebar from '@/components/Sidebar'
import { ChevronRight, LocalFlorist, MoreVert } from '@mui/icons-material'
import React from 'react'
import Hero from './Hero'
import Products from './Products'

const HealthSupport = () => {
    return (
        <div className=' w-screen max-h-max lg:h-screen flex lg:overflow-y-hidden'>
            <div className="hidden relative  w-fit h-fit lg:h-full lg:w-1/4  z-50  lg:block">
                <Sidebar />
            </div>
            <div className="  w-full h-full lg:w-3/4 flex flex-col">
                <div className=" w-full h-[8%] flex bg-white">
                    <div className=' mt-8 sm:mt-0 lg:hidden'><Sidebar /></div>
                    <CustomHeader
                        heading="Health"
                        icon={<LocalFlorist color="success" />}
                        menuIcon={<MoreVert color="success" />}
                    />
                </div>

                {/* main content max-h-[300px] md:max-h-[500px] lg:max-h-[400px] */}
                <div className='w-full flex-1 flex flex-col bg-[#EDF2FA] '>
                    <div className=' w-full h-[300px] md:h-[500px]'>
                        <Hero />
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-center'>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthSupport