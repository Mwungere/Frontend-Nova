import CustomHeader from '@/components/CustomHeader'
import Sidebar from '@/components/Sidebar'
import { ChevronRight, LocalFlorist, MoreVert } from '@mui/icons-material'
import React from 'react'
import PhChart from './PhChart'; // Ph Level chart
import IrrigationChart from './IrrigationChart'; // Irrigation chart
import { IconButton } from '@mui/material';
import NutrientsBarchart from './NutrientsBarchart';

const SoilHealth = () => {
    return (
        <div className=' w-screen lg:h-screen flex overflow-hidden'>
            <div className="hidden relative  w-fit h-fit lg:h-full lg:w-1/4  z-50  lg:block">
                <Sidebar />
            </div>
            <div className="  w-full lg:w-3/4 flex flex-col">
                <div className=" w-full h-[10%] flex bg-white">
                    <div className=' mt-8 sm:mt-0 lg:hidden'><Sidebar /></div>
                    <CustomHeader
                        heading="Health"
                        icon={<LocalFlorist color="success" />}
                        menuIcon={<MoreVert color="success" />}
                        subHeading='Soil Status'
                    />
                </div>

                {/* main content */}
                <div className='w-full flex flex-col bg-[#EDF2FA] p-2'>
                    <div className='flex flex-col md:flex-row md:space-x-2'>
                        {/* Ph Level Pie Chart */}
                        <div className=' w-full md:w-1/2'>
                            <PhChart />
                        </div>
                        {/* Irrigation Doughnut Chart */}
                        <div className=' w-full md:w-1/2'>
                            <IrrigationChart />
                        </div>
                    </div>
                    <div className=' w-full flex justify-between items-center bg-white p-2 rounded-xl my-2'>
                        <p className=' font-body font-semibold'>
                            More analysis for fertilizers...
                        </p>
                        <div>
                            <IconButton size='large'>
                                <ChevronRight className=' w-20' />
                            </IconButton>
                        </div>
                    </div>
                    <div className="max-w-full max-h-[500px] flex bg-white p-2 rounded-xl">
                        <NutrientsBarchart />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoilHealth