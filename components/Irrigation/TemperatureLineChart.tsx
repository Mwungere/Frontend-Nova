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

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureLineChart: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<string>('Option 1');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        console.log('Selected:', value); // Log the selected value to the console
    };

    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // X-axis labels (for days or time)
        datasets: [
            {
                label: 'Temperature (°C)', // Line label
                data: [22, 24, 19, 21, 25, 23, 26], // Data for each day (temperature in °C)
                borderColor: 'rgba(75, 192, 192, 1)', // Line color (light blue)
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area under the line color
                borderWidth: 2, // Line thickness
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
                pointBorderColor: '#fff', // Point border color
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
