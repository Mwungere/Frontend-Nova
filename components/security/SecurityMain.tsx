"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Videos } from "@/constants";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItemAvatar,
} from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { fetchVideoUrl } from "@/app/firebaseConfig";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import { Avatar, List, ListItem } from "material-ui";
const SecurityMain = () => {
  const [currentVideo, setCurrentVideo] = useState<string>("/ep1.mp4");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getVideoUrl = async () => {
      const videoUrl = await fetchVideoUrl("nova_farm_12345");
      console.log(videoUrl);
      if (videoUrl) {
        setCurrentVideo(videoUrl);
      }
    };
    getVideoUrl();
  }, []);
  const handleVideoStream = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setOpen(false);
  };
  return (
    <div className="w-full h-full flex flex-col space-y-2 overflow-hidden justify-center items-center mx-auto p-2">
      <div className=" w-full flex justify-center items-center">
        <div className=" w-[950px] lg:w-[1030px] h-[500px] lg:h-[550px] ">
        <iframe
      width="853"
      height="480"
      src={currentVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
          {/* {currentVideo ? (
            <ReactPlayer
              className="object-cover"
              url={currentVideo}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "10px", overflow: "hidden" }}
              playing={true}
              loop={true}
              controls={true}
              muted={true}
            />
          ) : (
            <div>Loading...</div>
          )} */}
        </div>
        <div className="hidden lg:flex flex-col w-[340px] h-[550px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white ml-5 px-3">
          {Videos.slice(0, 5).map(({ video, camera, status }) => {
            let isActive: boolean = false;
            if (status === "live") {
              isActive = true;
            } else {
              isActive = false;
            }
            return (
              <div
                key={video}
                className="w-full h-full cursor-pointer flex justify-start space-x-2 items-center border-b"
                onClick={() => handleVideoStream(video)}
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
                <div className=" flex flex-col">
                  <p className=" font-body capitalize font-semibold ">
                    {camera}
                  </p>
                  <div className=" flex justify-center items-center">
                    <p className=" font-body capitalize font-medium text-colr mr-5">
                      Status:{" "}
                    </p>
                    <div
                      className={`w-2 h-2 ${
                        isActive ? "bg-red-600" : "bg-secondary"
                      } rounded-full mr-1`}
                    ></div>
                    <p className=" font-body capitalize text-color">{status}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className=" flex flex-col justify-center items-center px-7">
            <div className=" w-full flex justify-between items-center">
              <p className=" font-body text-sm text-color font-bold">
                Total Cameras:
              </p>
              <p>{Videos.length}</p>
            </div>
            <div className=" w-full flex justify-between items-center">
              <p className=" font-body text-sm text-color font-bold">
                Live Cameras:
              </p>
              <p className=" font-body text-red-600">1</p>
            </div>
            <div className=" w-full flex justify-between items-center">
              <p className=" font-body text-sm text-color font-bold text-secondary">
                Offline Cameras:
              </p>
              <p className=" font-body">8</p>
            </div>
          </div>
          <div className=" w-full flex justify-end">
            <p
              onClick={() => setOpen(true)}
              className=" font-body text-color self-end text-sm font-semibold hover:cursor-pointer mr-2"
            >
              See More...
            </p>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
            >
              <DialogTitle id="dialog-title">All Cameras</DialogTitle>
              <DialogContent>
                {Videos.map(({ video, camera, status }) => {
                  let isActive: boolean = false;
                  if (status === "live") {
                    isActive = true;
                  } else {
                    isActive = false;
                  }
                  return (
                    <div
                      key={video}
                      className="w-[500px] h-[100px] cursor-pointer flex justify-start space-x-2 items-center border-b hover:bg-slate-200 rounded-lg"
                      onClick={() => handleVideoStream(video)}
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
                      <div className=" flex flex-col">
                        <p className=" font-body capitalize font-semibold ">
                          {camera}
                        </p>
                        <div className=" flex justify-center items-center">
                          <p className=" font-body capitalize font-medium text-colr mr-5">
                            Status:{" "}
                          </p>
                          <div
                            className={`w-2 h-2 ${
                              isActive ? "bg-red-600" : "bg-secondary"
                            } rounded-full mr-1`}
                          ></div>
                          <p className=" font-body capitalize text-color">
                            {status}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-full flex overflow-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-2">
        {Videos.slice(0, 1).map(({ video }) => (
          <div
            key={video}
            className="w-full h-full cursor-pointer"
            onClick={() => handleVideoStream(video)}
          >
            <div className="w-[400px] h-[230px]  flex justify-center items-center relative overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <iframe
      width="100%"
      height="100%"
      src={currentVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
            </div>
          </div>
        ))}
        {Videos.map(({ video }) => (
          <div
            key={video}
            className="w-full h-full cursor-pointer"
            onClick={() => handleVideoStream(video)}
          >
            <div className="w-[400px] h-[230px] flex justify-center items-center bg-slate-300">
              <VideocamOffOutlinedIcon
                fontSize="large"
                sx={{ fontSize: "100px", color: "#FFFFFF" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full h-20 flex items-center justify-center space-x-10">
        <div className=" w-20 h-12 bg-secondary flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <MicIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-20 h-12 bg-secondary flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <VideocamOutlinedIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <BackupOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-20 h-12 bg-[#FFC8C8] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <DvrOutlinedIcon sx={{ color: "#EB5757" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton size="large">
            <SmsOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-20 h-12 bg-[#DFEBFF] flex items-center justify-center border-secondary rounded-full">
          <IconButton>
            <MoreHorizOutlinedIcon sx={{ color: "#1F6115" }} fontSize="large" />
          </IconButton>
        </div>
        <div className=" w-32 h-12 flex items-center justify-center bg-[#941616] rounded-full">
          <button className=" font-body text-white">End Live</button>
        </div>
      </div>
    </div>
  );
};
export default SecurityMain;