"use client";
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FaChevronDown } from 'react-icons/fa';


interface TemperatureData {
    timestamp: string;
    temperature: number | string;
  }
  
  interface TemperatureLineChartProps {
    temperatureData: TemperatureData[];
  }



// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureLineChart: React.FC<TemperatureLineChartProps> = ({temperatureData}) => {

    const data = {
        labels: temperatureData.map((entry) => entry.timestamp), // X-axis labels (timestamps)
        datasets: [
          {
            label: "Temperature (°C)", // Line label
            data: temperatureData.map((entry) => 
              typeof entry.temperature === 'number' ? entry.temperature : null  // Ensure valid number for charting
            ),
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line color
            borderWidth: 2, // Line thickness
            pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
            pointBorderColor: "#fff", // Point border color
            pointRadius: 5, // Size of points on the line
            fill: true, // Fill the area under the line
            tension: 0.4,
          },
        ],
      };
    

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide grid lines for x-axis
                },
                offset: true,
            },
            y: {
                beginAtZero: false, // You can set it to true if you want the Y-axis to start from 0
                grid: {
                    color: 'rgba(200, 200, 200, 0.1)', // Lighter grid lines for y-axis
                },
                title: {
                    display: false,
                },
                offset: true,
            },
        },
    };

    return (
        <div className='w-full h-full flex flex-col overflow-auto scrollable-chart'>
            <div className=' w-full flex justify-between items-center px-10'>
                <div className='flex flex-col items-start'>
                    <h1 className=' font-body font-semibold'>Temperature</h1>
                    <div className=' flex justify-center items-center'>
                        <div className=' w-6 h-1 bg-blue-500 rounded mr-5'></div>
                        <p className=' font-body'>Temp in &deg;C</p>
                    </div>
                </div>
               
            </div>
            <div className=" min-w-[700px] w-full max-w-[4000px] h-[450px] p-4 bg-white rounded-xl">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default TemperatureLineChart;
