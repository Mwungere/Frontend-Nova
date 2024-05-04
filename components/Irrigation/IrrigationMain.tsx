"use client";
import { weatherData } from "@/constants";
import { WeatherDataType } from "@/types";
import {
  WbSunny,
  Cloud,
  BeachAccess,
  LocationOn,
  Water,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
// import PhProgress from './WaterProgress'
import Graph from "./WaterProgress";
import GridDemo from "./IrrigationGraph";
import Image from "next/image";
import { SensorDataType } from '@/app/irrigation/page'

interface IrrigationMainProps{
  sensorData: SensorDataType[]; 
}
const IrrigationMain:React.FC<IrrigationMainProps> = ({sensorData}) => {
  const getWeatherIcon = (weather: WeatherDataType) => {
    switch (weather.weather.toLowerCase()) {
      case "sunny":
        return (
          <Image
            src={"/sunny.svg"}
            width={61}
            height={57}
            alt="sunny"
            className="mt-[10%]"
          />
        );
        break;

      case "rainy":
        return <Water />;
        break;
      case "cloudy":
        return <Cloud />;
        break;
      default:
        return <BeachAccess />;
        break;
    }
  };

  const [systemOn, setSystemOn] = useState<boolean>(false);

  const toggleSystem = () => {
    setSystemOn((prevSystemOn) => !prevSystemOn);
  };
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row">
      <div className=" w-full flex flex-1 flex-col lg:w-[65%] p-5">
        <div className="flex flex-1 w-full h-[30%] flex-col space-y-3 lg:space-y-0 lg:space-x-5 lg:flex-row ">
          <div className=" w-full lg:w-1/2 bg-white transition-all duration-300 ease-in-out rounded-lg">
            <div className=" flex p-3 justify-between">
              <h1 className=" text-secondary text-lg font-body font-semibold">
                Overview
              </h1>
              <div className=" flex">
                <LocationOn className=" group-hover:text-white" />
                <h1 className=" font-body font-semibold">Nyabihu</h1>
              </div>
            </div>
            <div className=" mx-auto flex flex-row justify-center ">
              <div className="">{getWeatherIcon(weatherData)}</div>
              <div className=" text-5xl font-body font-medium mt-[5%]">
                {weatherData.temperature} C{" "}
                <span className=" font-medium text-sm">Atm</span>
              </div>
            </div>
            <div className=" flex flex-col w-full p-3">
              <p className=" font-body">
                <span className=" font-body font-bold text-[#425f8a]">
                  Previous:{" "}
                </span>
                {weatherData.time}
              </p>
              <p className=" font-body">
                <span className=" font-body font-bold text-[#425f8a]">
                  Status:{" "}
                </span>
                {weatherData.state}
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 bg-white rounded-lg text-white">
            <Graph />
          </div>
        </div>
        <div className=" w-full h-[45%] lg:h-[70%] bg-white mt-[3%] pl-[3%]">
          <div className=" w-full h-full my-auto flex items-center justify-center">
            <GridDemo sensorData= {sensorData} />
          </div>
        </div>
      </div>

      <div className="w-full mr-[5%] rounded-lg h-fit bg-white lg:flex flex-col my-[1.5%] justify-center items-center space-y-5 p-5 hidden ">
        <h1 className=" text-lg fontbody self-start">Automatic Irrigation</h1>
        <div className=" w-full">
          {systemOn && (
            <Image
              src={"/on.svg"}
              width={450}
              height={336}
              alt="image"
              className="m-auto"
            />
          )}
          {!systemOn && (
            <Image
              src={"/off.svg"}
              width={450}
              height={336}
              alt="image"
              className="m-auto"
            />
          )}
        </div>
        <div className="toggle-container">
          <Button
            variant="contained"
            color={systemOn ? "primary" : "primary"}
            size="large"
            onClick={toggleSystem}
            className={`toggle-button ${systemOn ? "active" : ""}`}
          >
            System On
          </Button>
          <Button
            variant="contained"
            color={!systemOn ? "primary" : "primary"}
            size="large"
            onClick={toggleSystem}
            className={`toggle-button ${!systemOn ? "active" : ""}`}
          >
            System Off
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IrrigationMain;
