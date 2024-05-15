"use client"
import {CustomHeader, DashboardMain, Sidebar} from "@/components";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Dashboard = () => {

  return (
    <div className=" w-full h-screen flex">
      <div className=" w-1/4 h-full">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className="w-full h-[10%]">
          <CustomHeader
            heading="Dashboard"
            icon={<DashboardIcon color="success" />}
          />
        </div>
        <div className="w-full h-[90%] bg-[#EDF2FA] overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
