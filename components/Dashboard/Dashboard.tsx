import { Box } from "@mui/material";
import React from "react";
import {CustomHeader, DashboardMain, Sidebar} from "@/components";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Dashboard = () => {

  return (
    <div className=" w-full h-max flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className="w-full h-[10%]">
          <CustomHeader
            heading="Dashboard"
            icon={<DashboardIcon color="success" />}
          />
        </div>
        <div className="w-full h-[90%] bg-[#EDF2FA]">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
