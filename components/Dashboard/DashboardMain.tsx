"use client"
import { Badge, Button, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Search } from "@mui/icons-material";
import TodoTable from "./TodoTable";
import AddTodoDialog from "./AddTodoDialog";
import { IrrigationData, users } from "@/constants";
import { ResponsiveLine } from "@nivo/line";
import { User, UserContext } from "../contexts/UserContext";




const DashboardMain = () => {
  const user: User | null = useContext(UserContext); 
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

  const formatTime = (time: Date) => {
    const hours = time.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}${ampm}`;
  };

  

  const transformedData = [
    {
      id: 'temperature',
      color: 'hsl(255, 70%, 50%)',
      data: IrrigationData.map(dataPoint => ({
        x: formatTime(dataPoint.time), // Assuming you want time as x-axis
        y: parseFloat(dataPoint.temperature) // Convert string to number
      }))
    },
    {
      id: 'moisture',
      color: 'hsl(120, 70%, 50%)',
      data: IrrigationData.map(dataPoint => ({
        x: formatTime(dataPoint.time), // Assuming you want time as x-axis
        y: parseFloat(dataPoint.moisture) // Convert string to number
      }))
    }
  ];

  const returnTimeRangeName = ()=>{
    var timeNow: Date = new Date();
    const hours = timeNow.getHours();
    if (hours >= 0  && hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 17) {
      return "afternoon";
    } else if (hours >= 17 && hours < 24) {
      return "evening";
    } else {
      return "night";
    }
  }  

  
  const findFirstname = (person?: string  )=>{
    if(!person)return "";
    const namesArray : string[] = person.split(" ");
    return namesArray[0];
  }

  return (
    <div className=" w-full h-full flex flex-col lg:flex-row justify-center items-center pt-56 lg:pt-0  px-2">
      <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <div className=" pl-4 flex self-start items-center pt-12">
          <img src="/sunny.svg" alt="image" />
          <h1 className=" font-body text-3xl font-bold">
            Good {returnTimeRangeName()}, {findFirstname(user?.username)}!
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
          <div className=" w-[550px] h-[350px] mt-10">
          <ResponsiveLine
        data={transformedData}
        margin={{ top: 50, right: 50, bottom: 50, left: 20 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Values',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        lineWidth={1}
        enablePoints={false}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
    />
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
