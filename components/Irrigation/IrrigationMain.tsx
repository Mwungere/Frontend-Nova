"use client";
import React, { useEffect, useState, useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Cloud, BeachAccess, LocationOn, Water } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { waterData, weatherData } from "@/constants";
import { WeatherDataType } from "@/types";
import { SensorDataType } from "@/app/irrigation/page";
import { ApexOptions } from "apexcharts";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import ChartComponent from "./ChartComponent";
import { UserContext } from "../contexts/UserContext";
import TemperatureLineChart from "./TemperatureLineChart";
import HumidityChart from "./HumidityChart";

const IrrigationMain: React.FC = () => {

  const [selectedChart, setSelectedChart] = useState<string>("Temperature");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedChart(value);
  };

    const [latestSensorData, setLatestSensorData] = useState<any>(null); // Adjust type as per your actual data structure
    const [allDatas, setAllDatas] = useState<any[]>([]); // Adjust type as per your actual data structure
    const token: any = Cookies.get("token");

    const [physicalQuantity, setPhysicalQuantity] = useState<string>("temperature"); // Default to temperature or the initial physical quantity

    const user = useContext(UserContext);
    useEffect(() => {
      const socket = io("http://194.163.167.131:7500/ws/sensor-data/");

      socket.on("connect", () => {
        console.log("Connected with ID:", socket.id);
      });

      socket.emit("token", token);

      socket.on("sensorDatas", (data) => {
        console.log("Received sensor data:", data);
        if(data.length > 0){
         data.map((d:any)=>{
          if(d.user == user?._id){
            setLatestSensorData(d)
            setAllDatas((prevData)=>[...prevData, d])
          }
         })
        }
        setAllDatas(data);
        setPhysicalQuantity(data.physicalQuantity); 
      });

      socket.on("newDatas", (newData) => {
        console.log("Received new data:", newData);
        setAllDatas((prevData) => [...prevData, newData]); 
      });



      return () => {
        socket.disconnect(); 
      };
    }, []);

  console.log("All datas" , allDatas);


  const formatTime = (time: string | Date) => {
    const date = typeof time === "string" ? new Date(time) : time;
    const formatted = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formatted;
  };

  const getWeatherIcon = (weather: WeatherDataType) => {
    switch (weather.weather.toLowerCase()) {
      case "sunny":
        return (
          <Image
            src={"/sunny.svg"}
            width={74}
            height={88}
            alt="sunny"
            className="mt-[10%]"
          />
        );
      case "rainy":
        return <Water />;
      case "cloudy":
        return <Cloud />;
      default:
        return <BeachAccess />;
    }
  };

  const [alignment, setAlignment] = useState("on");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };


  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 space-y-2">
      <div className="w-full flex space-x-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {/* first div */}
        <div className="flex flex-col min-w-[520px] h-[350px] bg-white rounded-2xl px-2">
          <div className="flex justify-between w-full pt-2">
            <p className="font-body text-lg font-normal">Overview</p>
            <div className="flex">
              <LocationOn />
              <p className="font-body text-lg font-normal">Nyabihu</p>
            </div>
          </div>
          <div className="flex justify-center items-center my-10 space-x-10">
            <div>{getWeatherIcon(weatherData)}</div>
            <div className="flex justify-center items-center">
              <p className="text-5xl font-body font-medium mt-[5%]">
                {/* {latestSensorData?.temperature}{" "} */}
                <span className="text-3xl">C</span>{" "}
                <span className="font-semibold font-body text-sm">Atm</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <p className="font-body text-2xl font-normal mb-8">
              Irrigation Updates
            </p>
            <p className="font-body font-semibold mb-4">
              <span className="text-[#838ea1]">Previous: </span>
              {/* {latestSensorData?.time && formatTime(latestSensorData.time)} */}
            </p>
            <p className="font-body font-semibold text-secondary">
              <span className="text-[#838ea1]">Status: </span>
              {weatherData.state}
            </p>
          </div>
        </div>
        {/* second div */}
        <div className="flex flex-col min-w-[520px] h-[350px] bg-white rounded-2xl justify-center items-center">
          <h1 className="flex items-start font-body self-start justify-start p-2">
            My Tank
          </h1>
          <div className="w-[193px] h-[160px] flex justify-center items-center">
            <ResponsivePie
              data={waterData}
              innerRadius={0.8}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={10}
              colors={{ scheme: "blues" }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
            />
          </div>
          <div className="bg-[url('/waterBg.svg')] flex w-full flex-col rounded-b-2xl justify-center items-center bg-cover bg-no-repeat">
            <img src="/drop.svg" alt="img" className="pt-4" />
            <div className="flex justify-center items-end pb-3">
              <img src="/warning.svg" alt="img" width={23} height={22} />
              <p className="font-body text-sm font-semibold">
                Refill the tank when water level drops below 15%.
              </p>
            </div>
          </div>
        </div>
        {/* third div */}
        <div className="flex flex-col min-w-[350px] h-[350px] bg-white rounded-2xl justify-center items-center">
          <div className="flex space-x-2 mb-2 ">
            <img src="/waterIcon.svg" alt="" />
            <div className="flex flex-col justify-center items-start space-y-2">
              <p className="font-body text-xl pt-1">Automatic Irrigation</p>
              <p className="font-body text-sm text-[#838ea1]">
                Real Time Control Of Your System
              </p>
            </div>
          </div>
          {alignment === "on" ? (
            <img src="/systemOn.svg" className="w-[250px] h-[200px] mb-2" />
          ) : (
            <img src="/systemOn.svg" className="w-[250px] h-[200px] mb-2" />
          )}
          <div className="pb-3">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="platform"
            >
              <ToggleButton value="on" className="rounded-xl">
                System On
              </ToggleButton>
              <ToggleButton value="off" className="rounded-xl">
                System Off
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className=" relative min-w-full max-w-full max-h-[500px] lg:flex-1 flex bg-white p-2 rounded-xl">

        <div className="absolute top-4 right-4">
          <select
            value={selectedChart}
            onChange={handleSelectChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
          >
            <option value="Temperature">Temperature</option>
            <option value="Humidity">Humidity</option>
          </select>
        </div>

        {selectedChart === "Temperature" ? (
          <TemperatureLineChart />
        ) : (
          <HumidityChart />
        )}

      </div>
    </div>
  );
};

export default IrrigationMain;
