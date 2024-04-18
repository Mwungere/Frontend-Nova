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
          label: 'Value',
          max: 1024, 
        },
      ]}
      height={350}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    />
  );
}

export default GridDemo;
