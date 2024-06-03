"use client"
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { IconButton, SelectChangeEvent } from "@mui/material";
import { Add, Height, PlusOne, Remove } from "@mui/icons-material";
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import { cameras, recentCameraCaptions } from "@/constants";
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { FaChevronDown } from "react-icons/fa";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CamControlsMain = () => {
  const [quality, setQuality] = useState('');
  const handleQualityChange = (event: SelectChangeEvent) => {
    setQuality(event.target.value);
  }
  return (
    <div className=" w-full h-full flex flex-col overflow-x-visible p-2">
      <div className="w-full flex justify-center items-center space-x-6 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide p-2">
        <div className="min-w-[400px] lg:min-w-[500px] h-[218px] flex flex-col bg-white items-center justify-center rounded-xl">
          <h2 className=" self-start font-body font-bold pl-10 text-xl">
            Cam Records
          </h2>
          <div className="flex w-full pl-8 items-center mb-6">
            <hr className=" w-44 h-1 bg-secondary" />
            <div className=" bg-secondary w-2 h-2 rounded-full"> </div>
          </div>
          <div className=" w-full  flex flex-col items-center justify-center space-y-2">
            <div className=" w-full justify-between items-center flex">
              <div className=" w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">MG</p>
                <Switch defaultChecked color="success" />
              </div>
              <div className="w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">LBY</p>
                <Switch defaultChecked color="success" />
              </div>
            </div>
            <div className=" w-full justify-between items-center flex">
              <div className=" w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">FY</p>
                <Switch defaultChecked color="success" />
              </div>
              <div className="w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">BY</p>
                <Switch defaultChecked color="success" />
              </div>
            </div>
            <div className=" w-full justify-between items-center flex">
              <div className=" w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">LW</p>
                <Switch defaultChecked color="success" />
              </div>
              <div className="w-1/2 flex justify-evenly items-center">
                <p className=" font-body font-bold text-lg">RW</p>
                <Switch defaultChecked color="success" />
              </div>
            </div>
          </div>
        </div>
        <div className=" min-w-[400px] lg:min-w-[500px] h-[218px] flex flex-col bg-white items-center justify-center rounded-xl">
          <h2 className=" self-start font-body font-bold pl-10 text-xl">
            Cam Controls
          </h2>
          <div className="flex w-full pl-8 items-center mb-6">
            <hr className=" w-44 h-1 bg-secondary" />
            <div className=" bg-secondary w-2 h-2 rounded-full"> </div>
          </div>
          <div className=" w-full  flex flex-col items-center justify-center space-y-7">
            <div className=" w-full justify-between items-center flex">
              <div className=" w-1/2 flex justify-start px-4 space-x-5 items-center">
                <p className="w-14  font-body font-bold text-lg">Zoom</p>
                <div className=" w-1/2 flex justify-center items-center space-x-2">
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Add
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                      />
                    </IconButton>
                  </div>
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Remove
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                        className=" font-bold"
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-start px-4 space-x-5 items-center">
                <p className="w-14  font-body font-bold text-lg">Rec</p>
                <div className=" w-1/2 flex justify-center items-center space-x-2">
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Add
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                      />
                    </IconButton>
                  </div>
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Remove
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                        className=" font-bold"
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full justify-between items-center flex">
              <div className=" w-1/2 flex justify-start px-4 space-x-5 items-center">
                <p className=" w-14 font-body font-bold text-lg">Vol</p>
                <div className=" w-1/2 flex justify-center items-center space-x-2">
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Add
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                      />
                    </IconButton>
                  </div>
                  <div className=" w-11 h-11 bg-white rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Remove
                        fontSize="medium"
                        sx={{ color: "black", fontWeight: "bold" }}
                        className=" font-bold"
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-between px-5 items-center">
                <p className="w-14  font-body font-bold text-lg">Stable</p>
                <Switch defaultChecked color="success" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[218px] flex flex-col bg-white items-center justify-center rounded-xl px-4">
            <div className=" w-full flex justify-between items-center">
                <h2 className=" font-body text-xl font-bold">CCTV cams</h2>
                <div className=" w-11 h-11 bg-secondary rounded-full shadow-md flex justify-center items-center">
                    <IconButton>
                      <Add
                        fontSize="medium"
                        sx={{ color: "white", fontWeight: "bold" }}
                      />
                    </IconButton>
                  </div>
            </div>
            <div className=" w-full flex justify-center items-center">
                <img src="/camera.svg" alt="" />
            </div>
            <div className=" w-full flex justify-center items-center">
                <p className=" mr-1 font-body font-bold">System: </p>
                <div className=" flex flex-1 justify-between items-center">
                    <p className=" font-body text-secondary ">ON</p>
                    <Switch defaultChecked color="success" />
                </div>
            </div>
            <div className=" w-full flex justify-center items-center">
                <p className=" mr-1 font-body font-bold">Time: </p>
                <div className=" flex flex-1 justify-between items-center">
                    <p className=" font-body">Mon, 10:00 Am</p>
                </div>
            </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center space-x-4">
        <div className=" w-[900px] h-[261px] flex flex-col justify-center items-center bg-white px-5 rounded-xl shadow-xl">
          <div className=" w-full flex justify-between items-center mb-4">
            <IconButton sx={{backgroundColor:"green"}}>
              <VideoCameraBackOutlinedIcon sx={{color:"white"}} fontSize="large" />
            </IconButton>
            <div className=" flex flex-col justify-end items-center">
              <p className=" font-body font-sm">On 26 April, 2024</p>
              <p className=" self-end font-body text-color">7:30 AM</p>
            </div>
          </div>
          <div className=" w-full flex justify-between items-center">
            <div className=" flex flex-col justify-start items-start space-y-3">
              <h1 className=" font-body font-sm">Esther entered your field </h1>
              <div className=" flex justify-start items-start space-x-10">
                <p className="  font-body text-color">Height:</p>
                <p className=" font-body font-sm">165 Cm</p>
              </div>
              <div className=" flex justify-start items-start space-x-9">
                <p className="  font-body text-color">Gender:</p>
                <p className=" font-body font-sm">Female</p>
              </div>
              <div className=" flex justify-start items-start space-x-12">
                <p className=" font-body text-color">Race:</p>
                <p className=" font-body font-sm">African</p>
              </div>
            </div>
            <img src="/intrusion.svg" className="w-[303px] h-[175px]" />
          </div>
        </div>
        <div className=" w-[700px] flex flex-col justify-center items-center">
          <h1 className=" font-body font-semibold text-lg">Recent camera captions</h1>
          <div className=" w-full h-[261px] flex flex-col justify-center items-center overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-y-3 ">
            {
              recentCameraCaptions.slice(0,3).map((caption, index) => (
                <div key={index} className=" w-full h-[70px] flex justify-start items-center bg-white space-x-6 px-5 rounded-lg">
                  <IconButton sx={{backgroundColor: "#EDF2FA"}}>
                    <AccessAlarmsOutlinedIcon fontSize="large" sx={{color: "black"}} />
                  </IconButton>
                  <div className=" flex-1 flex flex-col justify-center items-start space-y-3">
                    <p className=" font-body">{caption.caption}</p>
                    <div className="w-full flex justify-between">
                      <p className=" font-body font-light text-color">{caption.location}</p>
                      <p className="font-body font-light text-color">{caption.time}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <p className=" font-body text-sm font-bold text-color self-end hover:cursor-pointer">More notes...</p>
        </div>
      </div>
      <div className="w-full flex overflow-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-2">
        {
          cameras.map((camera) => {
            const divStyle = {
              backgroundImage: `url(${camera.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            
            };
            return (
              <div key={camera.id} className=" min-w-[503px] bg-white flex flex-col justify-center items-center p-1 rounded-xl">
                <div className=" w-full flex items-center justify-between px-6">
                  <p className=" font-body">{camera.cam}</p>
                  <IconButton sx={{backgroundColor: "#EDF2FA"}}>
                    <PowerSettingsNewOutlinedIcon sx={{color: "black"}} />
                  </IconButton>
                </div>
                <div style={divStyle} className={` min-w-[475px] min-h-[250px]  rounded-b-2xl flex justify-between items-start p-2`}>
                  <div className=" w-28 h-10 px-1 flex justify-center items-center bg-black bg-opacity-45">
                    <p className=" text-white font-body ml-1">Full HD</p>
                    <IconButton>
                      <KeyboardArrowDownIcon sx={{color: "white"}} />
                    </IconButton>
                  </div>
                  <div className="w-24 h-10 px-1 flex justify-center items-center bg-black bg-opacity-45">
                    <div className=" w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <p className=" text-white font-body ml-1">Live</p>
                    
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}; 

export default CamControlsMain;
