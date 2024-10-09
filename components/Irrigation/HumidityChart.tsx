"use client";
import React from 'react';
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

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface HumidityEntry {
    timestamp: string;
    humidity: number; // Change `any` to a more specific type if possible, e.g., `number`
}

interface HumidityData {
    sensor1: HumidityEntry[];
    sensor2: HumidityEntry[];
}

interface HumidityChartProps {
    humidityData: HumidityData;
}

const HumidityChart: React.FC<HumidityChartProps> = ({humidityData}) => {
    // Data for two sensors
    const labels = humidityData.sensor1.map(entry => entry.timestamp); // Use timestamps as labels

    const datasets = [
        {
            label: 'Sensor 1',
            data: humidityData.sensor1.map(entry => entry.humidity), // Extract humidity values for Sensor 1
            borderColor: '#35f1c2',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4, // Makes the lines curve slightly
        },
        {
            label: 'Sensor 2',
            data: humidityData.sensor2.map(entry => entry.humidity), // Extract humidity values for Sensor 2
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4,
        },
    ];

    const data = {
        labels,
        datasets,
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
            <div className='w-full flex justify-between items-center px-10'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-body font-semibold'>Humidity Levels</h1>
                    <div className='flex space-x-10 '>
                        <div className=' flex justify-center items-center'>
                            <div className='w-6 h-1 bg-[#35f1c2] rounded mr-5'></div>
                            <p className='font-body'>Sensor 1</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <div className='w-6 h-1 bg-red-500 rounded mr-5'></div>
                            <p className='font-body'>Sensor 2</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-6 h-1 bg-blue-500 rounded mr-5'></div>
                            <p className='font-body'>Sensor 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[700px] w-full max-w-[4000px] min-h-[400px] xl:max-h-[450px] p-4 bg-white rounded-xl">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default HumidityChart;
