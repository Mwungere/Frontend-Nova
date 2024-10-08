"use client";
import React, { useState, useEffect } from "react";
import { Videos } from "@/constants";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import {
  IconButton,
} from "@mui/material";

const SecurityMain = () => {
  const [currentVideo, setCurrentVideo] = useState<string>("");

  useEffect(() => {
    const videoSocket = new WebSocket("ws://localhost:8000/ws/video-data/");

    videoSocket.onopen = function () {
      console.log("WebSocket connection established");
    };

    videoSocket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.frame) {
        setCurrentVideo(`data:image/jpeg;base64,${data.frame}`);
      }
    };

    videoSocket.onclose = function () {
      console.log("WebSocket connection closed");
    };

    return () => {
      videoSocket.close();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col space-y-2 overflow-hidden justify-center items-center mx-auto p-2">
      <div className="w-full flex justify-center items-center">
        <div className="w-[950px] lg:w-[1030px] h-[500px] lg:h-[550px]">
          {currentVideo ? (
            <img
              src={currentVideo}
              alt="Live Video Stream"
              className="object-cover w-full h-full"
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <div>Loading live video...</div>
          )}
        </div>

        <div className="hidden lg:flex flex-col w-[340px] h-[550px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white ml-5 px-3">
          {Videos.slice(0, 5).map(({ video, camera, status }) => {
            let isActive = status === "live";

            return (
              <div
                key={video}
                className="w-full h-full cursor-pointer flex justify-start space-x-2 items-center border-b"
              >
                {isActive ? (
                  <VideocamOutlinedIcon
                    sx={{ fontSize: "50px", color: "#941616" }}
                  />
                ) : (
                  <VideocamOffOutlinedIcon
                    sx={{ fontSize: "50px", color: "#1F6115" }}
                  />
                )}
                <div className="flex flex-col">
                  <p className="font-body capitalize font-semibold">{camera}</p>
                  <div className="flex justify-center items-center">
                    <p className="font-body capitalize font-medium text-colr mr-5">
                      Status:{" "}
                    </p>
                    <div
                      className={`w-2 h-2 ${
                        isActive ? "bg-red-600" : "bg-secondary"
                      } rounded-full mr-1`}
                    ></div>
                    <p className="font-body capitalize text-color">{status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex overflow-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-2">
        {Videos.slice(0, 1).map(({ video }) => (
          <div
            key={video}
            className="w-full h-full cursor-pointer"
          >
            <div className="w-[400px] h-[230px] flex justify-center items-center relative overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              <img src={currentVideo} alt="Live Video Stream" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-20 flex items-center justify-center space-x-10">
        <div className="w-20 h-12 bg-secondary flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <MicIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-20 h-12 bg-secondary flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <VideocamOutlinedIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <BackupOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-20 h-12 bg-[#FFC8C8] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <DvrOutlinedIcon sx={{ color: "#EB5757" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <SmsOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton>
            <MoreHorizOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="w-32 h-12 flex items-center justify-center bg-[#941616] rounded-full">
          <button className="font-body text-white">End Live</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityMain;
