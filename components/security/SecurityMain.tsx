"use client";
import React from "react";
import Sidebar from "../Sidebar";
import {CustomHeader} from "@/components";
import { Menu, PowerSettingsNewOutlined, Security } from "@mui/icons-material";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import ReactPlayer from 'react-player/youtube';

const SecurityMain = () => {
  return (
    <div className=" w-full h-full flex overflow-hidden justify-center items-center mx-auto">
     <ReactPlayer
      url='https://www.youtube.com/watch?v=aL27fX5kv9U'
      controls={true}
      playing={true}
      loop={true}
      />
    </div>
  );
};

export default SecurityMain;
