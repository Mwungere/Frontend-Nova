import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function GridDemo() {
  return (
    <LineChart
      xAxis={[
        {
          id: 'meeasurements',
          data: [1, 2, 3, 5, 8, 10],
        },
      ]}
      series={[
        {
          id:'Temperature',
          color:'green',
          label:'Temperature',
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          id:'Moisture',
          label:'Moisture',
          data: [3, 6.5, 1, 7.5, 2.5, 4],
        }
      ]}
      height={350}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    />
  );
}
