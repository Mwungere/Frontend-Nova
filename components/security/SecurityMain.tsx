"use client";
import React from "react";
import Sidebar from "../Sidebar";
import { CustomHeader } from "@/components";
import { Menu, PowerSettingsNewOutlined, Security } from "@mui/icons-material";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { Videos } from "@/constants";
import { index } from "d3";


const SecurityMain = () => {
  
  return (
    <div className=" w-full h-full flex  flex-col space-y-2 overflow-hidden justify-center items-center mx-auto px-2">
      <div className=" w-[950px] lg:w-[1430px] h-[500px] lg:h-[650px] flex justify-center items-center ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=aL27fX5kv9U"
          width={"100%"}
          height={"100%"}
          // controls={true}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
          playing={true}
          loop={true}
          muted={true}
        />
      </div>
      <div className=" w-full flex overflow-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-2 ">
        {Videos.map(({ video }) => (
          <div key={video} className=" w-full h-full">
            <div className=" w-[400px] h-[230px] lg:h-[150px] flex justify-center items-center">
              <ReactPlayer
                url={video}
                width={"100%"}
                height={"100%"}
                // controls={true}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                playing={false}
                loop={true}
                muted={true}
              />
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default SecurityMain;
