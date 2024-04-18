import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const time = [
  new Date(2024, 3, 17, 8, 0, 0),   // Sample time points, adjust as needed
  new Date(2024, 3, 17, 9, 0, 0),
  new Date(2024, 3, 17, 10, 0, 0),
  new Date(2024, 3, 17, 11, 0, 0),
  new Date(2024, 3, 17, 12, 0, 0),
  new Date(2024, 3, 17, 13, 0, 0),
];

export default function GridDemo() {
  return (
    <LineChart
      xAxis={[
        {
          id: 'meeasurements',
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
          data: [20, 22, 23, 25, 24, 22], // Sample temperature values, adjust as needed
        },
        {
          id: 'Moisture',
          label: 'Moisture',
          data: [30, 28, 25, 22, 20, 18], // Sample moisture values, adjust as needed
        },
      ]}
      height={350}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    />
  );
}
