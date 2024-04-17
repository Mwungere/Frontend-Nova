"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { colors } from "@mui/material";

const data = [{ value: 72 }, { value: 38 }];
const data2 = [{ value: 72 }, { value: 38 }];

const FarmData = {
  waterLevel: 72,
  phlevel: 5.5,
  acidic: true,
  neutral: false,
  alkaline: false,
  nodata: false,
};

const size = {
  width: 300,
  height: 200,
};
const size2 = {
  width: 300,
  height: 150,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
  color: "cyan",
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2.5}
      sx={{ fontWeight: "bold" }}
    >
      {children}
    </StyledText>
  );
}
function PieCenterLabel2({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 1.8}
      sx={{ fontWeight: "bold" }}
    >
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div className=" flex w-full">
      <div className=" w-2/4">
        <PieChart
          series={[{ data, innerRadius: 70 }]}
          {...size}
          colors={["#4EB7D9", "white"]}
        >
          <PieCenterLabel>{FarmData.waterLevel}%</PieCenterLabel>
          <PieCenterLabel2>Water Level</PieCenterLabel2>
        </PieChart>
      </div>
      <div className=" w-2/4">
        <PieChart
          series={[{ data, innerRadius: 50 }]}
          {...size2}
          colors={["#FF0000", "white"]}
        >
          <PieCenterLabel>Ph Level</PieCenterLabel>
          <PieCenterLabel2>5.5</PieCenterLabel2>
        </PieChart>

        <div className=" w-full flex space-x-4">
          <div className="">
            <div className=" flex flex-row space-x-2">
              <div className=" bg-red-800 w-5 h-5 contend-[''] rounded-lg">{""}</div>
              <p>Acidic</p>
            </div>
            <div className=" flex flex-row space-x-2">
              <div className=" bg-blue-800 w-5 h-5 contend-[''] rounded-lg">{}</div>
              <p>Alkaline</p>
            </div>
          </div>
          <div>
            <div className=" flex flex-row space-x-2">
              <div className=" bg-yellow-300 w-5 h-5 contend-[''] rounded-lg"></div>
              <p>Neutral</p>
            </div>
            <div className=" flex flex-row space-x-2">
              <div className=" bg-black w-5 h-5 contend-[''] rounded-lg"></div>
              <p>No data</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
