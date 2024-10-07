import React from 'react'
import Sidebar from '../Sidebar';
import CustomHeader from '../CustomHeader';
import HealthNutrientsMain from '../Health/healthNutrients/HealthNutrientsMain';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsTabs from './SettingsTabs';

const Settings = () => {
  return (
    <div className=" w-screen h-fit lg:h-screen flex overflow-hidden">
      <div className="hidden relative w-fit h-fit lg:h-full lg:w-1/4  z-50  lg:block">
        <Sidebar />
      </div>
      <div className="  w-full lg:w-3/4 flex flex-col">
        <div className=" w-full h-[70px] flex bg-white">
          <div className=' mt-8 sm:mt-0 lg:hidden'><Sidebar /></div>
          <CustomHeader
            heading="Settings"
            icon={<SettingsIcon color="success" />}
          />
        </div>

        {/* main content */}
        <div className='w-full flex-1 flex flex-col bg-[#EDF2FA] p-2 overflow-auto whitespace-nowrap  scroll-smooth scrollbar-hide'>
          <SettingsTabs />
        </div>
      </div>
    </div>
  );
}

export default Settings