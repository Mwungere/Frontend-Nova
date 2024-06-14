import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  data: any[]; // Adjust type as per your actual data structure
  physicalQuantity: string;
}

const ChartComponent: React.FC<Props> = ({ data, physicalQuantity }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let myChart: Chart<"line"> | null = null;

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((d) => {
              // Format the timestamp to hh:mm AM/PM
              const date = new Date(d.createdAt);
              return `${date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}`;
            }),
            datasets: [
              {
                label:
                  physicalQuantity === "temperature"
                    ? "Temperature (°C)"
                    : "Moisture", // Adjust labels as needed
                data: data.map((d) =>
                  physicalQuantity === "temperature"
                    ? d.temperature
                    : d.moisture
                ), // Adjust data access as per your actual data structure
                borderColor:
                  physicalQuantity === "temperature" ? "green" : "blue", // Adjust colors based on physicalQuantity
                fill: false,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 11,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Time",
                },
                ticks: {
                  display: true,
                },
              },
              y: {
                title: {
                  display: true,
                  text:
                    physicalQuantity === "temperature"
                      ? "Temperature (°C)"
                      : "Moisture",
                },
                ticks: {
                  display: true,
                },
                border: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (myChart) {
        myChart.destroy();
        myChart = null;
      }
    };
  }, [data, physicalQuantity]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
