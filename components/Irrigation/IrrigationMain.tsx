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
import TemperatureLineChart from "./TemperatureLineChart";
import HumidityChart from "./HumidityChart";



const IrrigationMain: React.FC = () => {


  const [selectedChart, setSelectedChart] = useState<string>("Temperature");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedChart(value);
  };


  type TemperatureData = {
    timestamp: string;
    temperature: number | string;  // Adjust type based on the actual data type you're working with
  };

  interface HumidityEntry {
    timestamp: string;
    humidity: any; // Change `any` to a more specific type if possible, e.g., `number`
}

interface HumidityData {
    sensor1: HumidityEntry[];
    sensor2: HumidityEntry[];
}


  const token: any = Cookies.get("token");  
  const [temperatureData, setTemperatureData] = useState<TemperatureData[]>([]);
  const [humidityData, setHumidityData] = useState<HumidityData>({ sensor1: [], sensor2: [] });

  
  const user   = useContext(UserContext);
  
  useEffect(() => {
    const socket = new WebSocket("ws://194.163.167.131:7500/ws/sensor-data/");

    socket.onopen = () => {
        console.log("WebSocket connection opened.");
    };

    socket.onmessage = (event) => {
        try {
            const parsedData = JSON.parse(event.data);
            console.log("Parsed data:", parsedData);

            // Check if the parsed data contains sensor data
            const sensorDataObject = parsedData?.sensor_data;

            if (sensorDataObject && typeof sensorDataObject === "object") {
                const humiditySensor = sensorDataObject?.Humidity_sensor;

                if (humiditySensor) {
                    const sensor1Data = humiditySensor["Sensor 1"];
                    const sensor2Data = humiditySensor["Sensor 2"]; // Add this line to get Sensor 2 data

                    // Extract temperature data from Sensor 1
                    if (Array.isArray(sensor1Data)) {
                        const temperatureDataForSensor1 = sensor1Data.map((entry) => ({
                            timestamp: new Date(entry.timestamp).toLocaleString(),
                            temperature: entry.temperatureValue || "N/A",
                        }));

                        console.log("Extracted temperature data:", temperatureDataForSensor1);
                        setTemperatureData(temperatureDataForSensor1);
                    } else {
                        console.error("Sensor 1 data is not an array.");
                    }

                    // Extract humidity data for both sensors
                    if (Array.isArray(sensor1Data)) {
                        const humidityDataForSensor1 = sensor1Data.map((entry) => ({
                            timestamp: new Date(entry.timestamp).toLocaleString(),
                            humidity: entry.moistureValue || "N/A", // Ensure your data contains this field
                        }));
                        console.log("Extracted humidity data for Sensor 1:", humidityDataForSensor1);
                        setHumidityData((prevData) => ({
                            ...prevData,
                            sensor1: humidityDataForSensor1,
                        }));
                    } else {
                        console.error("Sensor 1 data is not an array.");
                    }

                    if (Array.isArray(sensor2Data)) { // Extract humidity for Sensor 2
                        const humidityDataForSensor2 = sensor2Data.map((entry) => ({
                            timestamp: new Date(entry.timestamp).toLocaleString(),
                            humidity: entry.moistureValue || "N/A", // Ensure your data contains this field
                        }));
                        console.log("Extracted humidity data for Sensor 2:", humidityDataForSensor2);
                        setHumidityData((prevData) => ({
                            ...prevData,
                            sensor2: humidityDataForSensor2,
                        }));
                    } else {
                        console.error("Sensor 2 data is not an array.");
                    }
                } else {
                    console.error("Humidity sensor data is not available.");
                }
            } else {
                console.error("sensor_data is not an object:", sensorDataObject);
            }
        } catch (error) {
            console.error("Error parsing data:", error);
        }
    };

    socket.onclose = () => {
        console.log("WebSocket connection closed.");
    };

    return () => {
        socket.close();
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


  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 space-y-2">
      <div className="w-full flex space-x-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {/* first div */}
        <div className="flex flex-col min-w-[520px] h-[350px] bg-white rounded-2xl px-2">
          <div className="flex justify-between w-full pt-2">
            <p className="font-body text-lg font-normal">Overview</p>
            <div className="flex">
              <LocationOn />
              <p className="font-body text-lg font-normal">Kigali</p>
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
          <TemperatureLineChart temperatureData={temperatureData} />
        ) : (
          <HumidityChart humidityData={humidityData} />
        )}

      </div>
    </div>
  );
};

export default IrrigationMain;
