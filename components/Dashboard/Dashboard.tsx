import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardMain from "./DashboardMain";

const Dashboard = () => {
  return (
    <div className=" w-full h-max flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className="w-full h-[10%]">
          <DashboardHeader />
        </div>
        <div className="w-full h-[90%] bg-[#EDF2FA]">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
