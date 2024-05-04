import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { SensorDataType } from "@/app/irrigation/page";

interface GridDemoProps {
  sensorData: SensorDataType[];
}

const GridDemo: React.FC<GridDemoProps> = ({ sensorData }) => {
  const time = sensorData.map((data) => new Date(data.time)); 
  const temperatureValues = sensorData.map((data) => parseFloat(data.temperature));
  const moistureValues = sensorData.map((data) => parseFloat(data.moisture));
  console.log(time, moistureValues, temperatureValues, " from graph");

  return (
    <LineChart
      xAxis={[
        {
          id: 'measurements',
          data: time,
          label:"Time",
          scaleType: 'time',
          valueFormatter: (date) => {
            const hour = date.getHours().toString().padStart(2, '0');
            const minute = date.getMinutes().toString().padStart(2, '0');
            return `${hour}:${minute}`;
          },
        },
      ]}
      series={[
        {
          id: 'Temperature',
          color: 'green',
          label: 'Temperature',
          data: temperatureValues,
        },
        {
          id: 'Moisture',
          label: 'Moisture',
          data: moistureValues,
        },
      ]}
      yAxis={[
        {
          id: 'y-axis-1',
          label: 'Temperature,Moisture',
          max: 1200, 
          
        },
      ]}
      
      height={450}
      margin={{ left: 70, right: 30, top: 10, bottom: 40 }}
    />
  );
}

export default GridDemo;
