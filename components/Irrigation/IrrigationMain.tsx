"use client";
import { IrrigationData, waterData, weatherData } from "@/constants";
import { WeatherDataType } from "@/types";
import { ResponsivePie } from "@nivo/pie";
import {
  Cloud,
  BeachAccess,
  LocationOn,
  Water,
} from "@mui/icons-material";
import { Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { SensorDataType } from "@/app/irrigation/page";
import DashboardGraph from "../Dashboard/DashboardGraph";
import { ResponsiveLine } from "@nivo/line";

interface IrrigationMainProps {
  sensorData: SensorDataType[];
}
const IrrigationMain: React.FC<IrrigationMainProps> = ({ sensorData }) => {

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

  const [alignment, setAlignment] = React.useState("on");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className=" w-full h-full flex flex-col lg:flex-row items-center justify-center flex-wrap p-3 space-y-4">
      <div className=" w-full flex space-x-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {/* first div */}
        <div className=" flex flex-col min-w-[520px] h-[350px] bg-white rounded-2xl px-2">
          <div className=" flex justify-between w-full pt-2">
            <p className=" font-body text-lg font-normal">Overview</p>
            <div className=" flex">
              <LocationOn />
              <p className=" font-body text-lg font-normal">Nyabihu</p>
            </div>
          </div>
          <div className=" flex justify-center items-center my-10 space-x-10">
            <div>{getWeatherIcon(weatherData)}</div>
            <div className=" flex justify-center items-center">
              <p className=" text-5xl font-body font-medium mt-[5%]">
                {weatherData.temperature} <span className=" text-3xl">C</span>{" "}
                <span className=" font-semibold font-body text-sm">Atm</span>
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-start w-full">
            <p className=" font-body text-2xl font-normal mb-8">
              Irrigation Updates
            </p>
            <p className=" font-body font-semibold mb-4">
              <span className=" text-[#838ea1]">Previous: </span>
              {weatherData.time}
            </p>
            <p className=" font-body font-semibold text-secondary">
              <span className=" text-[#838ea1]">Status: </span>
              {weatherData.state}
            </p>
          </div>
        </div>
        {/* second div */}
        <div className=" flex flex-col min-w-[520px] h-[350px] bg-white rounded-2xl justify-center items-center">
          <h1 className=" flex items-start font-body self-start justify-start p-2">
            My Tank
          </h1>
          <div className=" w-[193px] h-[160px] flex justify-center items-center">
            <ResponsivePie
              data={waterData}
              // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
          <div className=" bg-[url('/waterBg.svg')] flex w-full flex-col rounded-b-2xl justify-center items-center bg-cover bg-no-repeat">
            <img src="/drop.svg" alt="img" className=" pt-4"/>
            <div className=" flex justify-center items-end pb-3">
              <img src="/warning.svg" alt="img" width={23} height={22} />
              <p className=" font-body text-sm font-semibold">
                Refill the tank when water level drops below 15%.
              </p>
            </div>
          </div>
        </div>
        {/* third div */}
        <div className=" flex flex-col min-w-[350px] h-[350px] bg-white rounded-2xl justify-center items-center">
          <div className=" flex space-x-2 mb-2 ">
            <img src="/waterIcon.svg" alt="" />
            <div className=" flex flex-col justify-center items-start space-y-2">
              <p className=" font-body text-xl pt-1">Automatic Irrigation</p>
              <p className=" font-body text-sm text-[#838ea1]">
                Real Time Control Of Your System
              </p>
            </div>
          </div>
          {alignment === "on" ? (
            <img src="/systemOn.svg" className=" w-[250px] h-[200px] mb-2" />
          ) : (
            <img src="/systemOn.svg" className=" w-[250px] h-[200px] mb-2" />
          )}
          <div className=" pb-3">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="platform"
            >
              <ToggleButton value="on" className=" rounded-xl">
                System On
              </ToggleButton>
              <ToggleButton value="off" className=" rounded-xl">
                System Off
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-[467px] bg-white rounded-2xl">
        <div className=" flex w-full justify-between items-center px-4">
          <p className=" font-body text-lg font-semibold">Temperature / Moisture</p>
          <p className="font-body text-sm font-semibold uppercase text-[#949494]">Moisture   Temperature</p>
        </div>
        <ResponsiveLine
        data={transformedData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
    </div>
  );
};

export default IrrigationMain;
