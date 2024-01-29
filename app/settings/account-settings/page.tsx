import CustomHeader from "@/components/CustomHeader";
import SettingsNavbar from "@/components/Settings/SettingsNavbar";
import Sidebar from "@/components/Sidebar";
import { Settings } from "@mui/icons-material";
import { Stack, TextField } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-max flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className=" w-full h-[10%]">
          <CustomHeader
            heading="Account Settings"
            icon={<Settings color="success" />}
          />
        </div>

        <div className=" w-full h-[90%] bg-[#EDF2FA]">
          <div className=" w-full h-[10%]">
            <SettingsNavbar />
          </div>
          <form action="" className=" w-full">
            <div className=" flex w-full">
              <div className=" w-1/2 p-10 flex flex-col space-y-[5%]">
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="fullname" className=" font-body text-[#929eb5]">Full name</label>
                  <TextField
                    fullWidth
                    label="Enter your full name"
                    name="fullname"
                  
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="fullname" className=" font-body text-[#929eb5]">Username</label>
                  <TextField
                    fullWidth
                    label="Enter your new username"
                    name="username"
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="currentPassword" className=" font-body text-[#929eb5]">Current Password</label>
                  <TextField
                    fullWidth
                    label="Enter your current password"
                    className=" font-body text-[#929eb5]"
                    name="currentPassword"
                    type="password"
                  />
                </div>
              </div>
              <div className=" w-1/2 p-10 flex flex-col space-y-[5%]">
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="email" className=" font-body text-[#929eb5]">Email</label>
                  <TextField fullWidth label="Enter your email" name="email" />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="phoneNumber" className=" font-body text-[#929eb5]">Phone number</label>
                  <TextField
                    fullWidth
                    label="Enter your new phone number"
                    name="phoneNumber"
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="newPassword" className=" font-body text-[#929eb5]">New Password</label>
                  <TextField
                    fullWidth
                    label="Enter your new password"
                    name="password"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
