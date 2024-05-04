"use client";
import React from "react";
import Sidebar from "../Sidebar";
import {CustomHeader} from "@/components";
import { PowerSettingsNewOutlined, Security } from "@mui/icons-material";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";

const SecurityMain = () => {
  return (
    <div className=" w-full flex h-screen overflow-hidden">
      <div className=" w-1/4 h-full">
        <Sidebar />
      </div>
      <div className="md:w-3/4 md:h-screen flex flex-col">
        <div className=" w-full h-[10%]">
            <CustomHeader heading="Security" icon={<Security color="success" />} />
        </div>
        <div className="bg-[#EDF2FA] w-full h-[90%] flex flex-col lg:flex-row">
            <div className=" my-auto mx-auto h-[45%] flex flex-col pb-5">
                <div className=" flex justify-between">
                    <p>Indoor Farm Camera</p>
                    <IconButton>
                        <PowerSettingsNewOutlined />
                    </IconButton>
                </div>
                <Image src={"./sec2.svg"} width={494} height={381} alt="image" className=" w-full h-full" />
            </div>
            <div className=" my-auto mx-auto h-[45%] flex flex-col pb-5">
                <div className=" flex justify-between">
                    <p>Indoor Farm Camera</p>
                    <IconButton>
                        <PowerSettingsNewOutlined />
                    </IconButton>
                </div>
                <Image src={"./sec2.svg"} width={494} height={381} alt="image" className=" w-full h-full" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityMain;
