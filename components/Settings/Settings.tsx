import React from 'react'
import Sidebar from '../Sidebar'
import CustomHeader from '../CustomHeader'
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsMain from './SettingsMain';

const Settings = () => {
  return (
    <div className=" w-full h-max flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className=" w-full h-[10%]">
          <CustomHeader
            heading="Settings"
            icon={<SettingsIcon color="success" />}
          />
        </div>
        <div className=" w-full h-[90%] bg-[#EDF2FA] ">
          <SettingsMain />
        </div>
      </div>
    </div>
  );
}

export default Settings