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
import { UserContext } from "../../app/context/UserContext";

const IrrigationMain: React.FC = () => {


  const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const [latestSensorData, setLatestSensorData] = useState<any>(null); 
  const [allDatas, setAllDatas] = useState<any[]>([]); 
  const token: any = Cookies.get("token");
  const [isStupid,setIsStupid] = useState<any>(["Verygood",]);
  
  const [physicalQuantity, setPhysicalQuantity] = useState<string>("temperature"); // Default to temperature or the initial physical quantity

  const user   = useContext(UserContext);
  useEffect(() => {
    const socket = io("http://localhost:3500");

    socket.on("connect", () => {
      console.log("Connected with ID:", socket.id);
    });

    socket.emit("token", token);

    socket.on("sensorDatas", (data) => {
      if(data.length > 0){
       data.map((d:any)=>{
        if(d.user == user?._id){
          console.log(d);          
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

  const chartOptions1: ApexOptions = {
    chart: {
      id: "realtime",
      height: 100,
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
      text: "Temperature / Celsius",
      align: "left",
    },

    xaxis: {
      type: "datetime",
      categories: allDatas.map((d) => {
        let time = new Date(d.time);
        time.setHours(time.getHours() + 2);
        return time;
      }),
    },

    yaxis: {
      max: 100,
      min: 0,
    },
    legend: {
      show: false,
    },
  };
  const chartSeries1: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined =
    {
      name: "Temperature",
      data: allDatas.map((data) => data.temperature),
    } as unknown as ApexAxisChartSeries | ApexNonAxisChartSeries;

  const chartOptions: ApexOptions = {
    chart: {
      id: "realtime",
      height: 100,
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
      text: "Moisture",
      align: "left",
    },
    colors: ["#66DA26"],

    xaxis: {
      type: "datetime",
      categories: allDatas.map((d) => {
        let time = new Date(d.time);
        time.setHours(time.getHours() + 2);
        return time;
      }),
    },

    yaxis: {
      max: 1024,
      min: 0,
    },
    legend: {
      show: false,
    },
  };

  const chartSeries: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined =
    {
      name: "Moisture",
      data: allDatas.map((data) => data.moisture),
    } as unknown as ApexAxisChartSeries | ApexNonAxisChartSeries;

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center flex-wrap p-3 space-y-2">
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
              {latestSensorData?.time && formatTime(latestSensorData.time)}
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
      <div className="flex justify-center items-center w-full h-[420px] bg-white rounded-2xl">
        <ChartComponent  data={allDatas} physicalQuantity={physicalQuantity}/>
        {/* <ApexChart
          type="line"
          options={chartOptions}
          series={chartSeries}
          height={400}
          width={700}
        /> */}

        {/* <ApexChart
          type="line"
          options={chartOptions1}
          series={chartSeries1}
          height={400}
          width={700}
        /> */}
      </div>
    </div>
  );
};

export default IrrigationMain;
