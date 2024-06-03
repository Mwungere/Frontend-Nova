"use client";
import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Cloud, BeachAccess, LocationOn, Water } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import {  waterData, weatherData } from "@/constants";
import { WeatherDataType } from "@/types";
import { SensorDataType } from "@/app/irrigation/page";
interface IrrigationMainProps {
  sensorData: SensorDataType[];
}

interface TransformedDataType {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

const IrrigationMain: React.FC= () => {
  const [latestSensorData, setLatestSensorData] = useState<SensorDataType | null>(null);  const [allDatas, setAllDatas] = useState<SensorDataType[]>([]);
  const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/sensor-data/");

    socket.onmessage = function (e) {
      const receivedData = JSON.parse(e.data);
      if (
        receivedData.temperature &&
        receivedData.moisture &&
        receivedData.time
      ) {
        setLatestSensorData({
          time: receivedData.time,
          temperature: receivedData.temperature,
          moisture: receivedData.moisture
        });
        setAllDatas(prevData => [...prevData, receivedData]);
      } else {
        console.warn("Incomplete data received", receivedData);
      }
    };

    socket.onclose = function (e) {
      console.error("WebSocket closed unexpectedly");
    };

    return () => {
      socket.close();
    };
  }, []); 

  const formatTime = (time: string | Date) => {
    const date = typeof time === "string" ? new Date(time) : time;
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const transformedData: TransformedDataType[] = [
    {
      id: "temperature",
      color: "hsl(255, 70%, 50%)",
      data: allDatas.map((dataPoint) => ({
        x: formatTime(dataPoint.time), // Assuming you want time as x-axis
        y: Number(dataPoint.temperature), // Convert to number
      })),
    },
    {
      id: "moisture",
      color: "hsl(20, 70%, 50%)",
      data: allDatas.map((dataPoint) => ({
        x: formatTime(dataPoint.time), // Assuming you want time as x-axis
        y: Number(dataPoint.moisture), // Convert to number
      })),
    },
  ];
  console.log("Transformed Data:", transformedData);
  console.log("All datas", allDatas);

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

  const chartOptions = {
    chart: {
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Temperature / Moisture",
      align: "left",
    },

    xaxis: {
      type: "datetime",
      categories: allDatas.map(d=>d.time)
      } 
,
    yaxis: {
      max: 1025,
      min: 0,
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: "Temperature",
      data: allDatas.map(data=> data.temperature)
    },
    {
      name: "Moisture",
      data: allDatas.map((data)=>data.moisture),
    },
  ];

  return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center flex-wrap p-3 space-y-4">
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
                    {latestSensorData?.temperature}{" "}
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
                  {weatherData.time}
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
          <div className="flex flex-col justify-center items-center w-full h-[467px] bg-white rounded-2xl">
            <ApexChart
              type="line"
              options={chartOptions}
              series={chartSeries}
              height={400}
              width={1000}
            />
          </div>
        </div>
  );
};

export default IrrigationMain;
