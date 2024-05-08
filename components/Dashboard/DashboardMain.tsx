"use client"
import { Badge, Button, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import BasicArea from "./DashboardGraph";
import { Search } from "@mui/icons-material";
import TodoTable from "./TodoTable";
import AddTodoDialog from "./AddTodoDialog";
import LineChart from "./DashboardGraph";
import { users } from "@/constants";




const DashboardMain = () => {
  const truncate = (str:string, length:number) => {
    if(!str)return "";
    return str.length>length?str.slice(0,length)+"...":str
  }
  const checkNew = (num:number) => {
    if(num === 0 || num < 0){
      return false
    }else{
      return true
    }
  }
  
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row justify-center items-center pt-56 lg:pt-0  px-2">
      <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <div className=" pl-4 flex self-start items-center">
          <img src="/sunny.svg" alt="image" />
          <h1 className=" font-body text-3xl font-bold">
            Good Afternoon, Smith!
          </h1>
        </div>
        <div className="p-3 w-full h-[300px] flex flex-col items-center bg-white rounded-xl">
          <div className=" w-full h-full flex flex-col items-center">
            <div className=" items-start w-full flex justify-between  px-4">
              <p className=" font-body text-lg font-bold">
                Current Status of my farm
              </p>
              <div className=" flex items-center justify-center gap-2">
                <p className=" font-body text-gray-400">Weekly</p>
                <FaChevronDown className=" text-gray-600" />
              </div>
            </div>
            <div className=" w-full flex justify-around flex-1 items-center">
              <div>
                <img src="/map.svg" alt="map" className="" />
              </div>
              <div className=" flex flex-col justify-start items-start">
                <div className="flex justify-center items-center">
                  <div className=" w-2 h-2 rounded-full bg-red-800 mr-2"> </div>
                  <p className=" font-body text-gray-400">Unhealthy plants</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" w-2 h-2 rounded-full bg-green-800 mr-2">
                    {" "}
                  </div>
                  <p className=" font-body text-gray-400">Healthy plants</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" w-2 h-2 rounded-full bg-gray-300 mr-2">
                    {" "}
                  </div>
                  <p className=" font-body text-gray-400">Uncultivated land</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-center bg-white rounded-xl mt-5">
          <div className=" w-full flex items-center justify-between px-4 pt-3">
            <p className=" uppercase font-body font-semibold  text-[#647894]">
              irrigation
            </p>
            <div className=" flex items-center justify-center">
              <div className=" flex justify-center items-center border border-[#3788E5] rounded-lg px-3 py-1">
                <p className=" capitalize font-body mr-4 font-semibold text-[#0B1C33]">
                  activities
                </p>
                <IconButton size="small">
                  <FaChevronDown className=" text-[#3788E5]" />
                </IconButton>
              </div>
              <div className=" flex justify-center items-center border border-[#3788E5] rounded-lg px-3 py-1 ml-2">
                <p className=" capitalize font-body mr-4 font-semibold text-[#0B1C33]">
                  Monthly
                </p>
                <IconButton size="small">
                  <FaChevronDown className=" text-[#3788E5]" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className=" h-[300px] mt-10">
            <LineChart />
          </div>
          <h1 className=" text-[#0B1C33] font-body text-lg font-normal">
            Chart for Analyzing Monthly Farm Activities
          </h1>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center   mt-5  lg:ml-3 ">
        <div className=" w-full flex flex-col justify-center items-center bg-white px-3 pb-20 pt-5 rounded-lg">
          <div className=" w-full flex  justify-between items-center">
            <h1 className=" uppercase text-[#0B1C33] font-body font-medium">
              daily schedule
            </h1>
            <div className=" flex justify-center items-center mb-5">
              <IconButton className=" mr-2">
                <Search />
              </IconButton>
              <AddTodoDialog />
            </div>
          </div>
          <div className=" w-full">
            <TodoTable />
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center  bg-white mt-5 mb-5 p-3 rounded-lg pb-10">
          <h1 className=" font-body font-medium text-[#0B1C33] text-lg px-1 py-3">Chat with our partners</h1>
          <div className=" w-full flex flex-col  justify-center items-center ">
            {users.map((user) => (
              
                <div
                key={user.img}
                className=" w-full flex justify-start  items-center py-8 px-2 cursor-pointer hover:bg-gray-200 transition ease-in-out delay-100 rounded-xl" 
              >
                  <img src={user.img} alt="img" className=" w-[48px] h-[48px] rounded-xl"/>
                <div className=" flex flex-col justify-center ml-5">
                  <p className=" font-body font-medium">{user.role}</p>
                  <p className=" font-body text-[#0B1C33] font-normal">{truncate(user.sms, 60)}</p>
                </div>
                <div className=" w-full flex flex-col justify-center items-end">
                  <p className="font-body text-[#0B1C33] font-normal">{user.time}</p>
                  {checkNew(user.new) && <div className=" w-5 h-5 bg-[#E53761] text-white text-sm font-bold font-body flex items-center justify-center rounded-md">{user.new}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
