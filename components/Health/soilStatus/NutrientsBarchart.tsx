"use client";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NutrientsBarchart: React.FC = () => {
  const data = {
    labels: ['SPL1', 'SPL2', 'SPL3', 'SPL4', 'SPL5', 'SPL6', 'SPL7', 'SPL8', 'SPL9', 'SPL10', 'SPL5', 'SPL6', 'SPL7', 'SPL8', 'SPL9', 'SPL10'],
    datasets: [
      {
        label: 'Nitrogen',
        data: [30, 20, 25, 15, 10, 30, 25, 15, 10, 30, 10, 30, 25, 15, 10, 30],
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // black
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        borderRadius: 50,
        borderSkipped: false,
        // barThickness: 10,

      },
      {
        label: 'Phosphorus',
        data: [10, 15, 10, 8, 5, 10, 25, 15, 10, 30, 10, 30, 25, 15, 10, 30],
        backgroundColor: 'rgba(0, 128, 0, 0.8)', // dark green
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
        borderRadius: 50,
        borderSkipped: false,
        // barThickness: 10,
      },
      {
        label: 'Potassium',
        data: [60, 50, 45, 40, 30, 50, 25, 15, 10, 30, 10, 30, 25, 15, 10, 30],
        backgroundColor: 'rgba(50, 205, 50, 0.8)', // light green
        borderColor: 'rgba(50, 205, 50, 1)',
        borderWidth: 1,
        borderRadius: 50,
        borderSkipped: false,
        // barThickness: 10,

      },
    ],
  };

  const options = {
    responsive: true,
    categoryPercentage: 0.5,
      barPercentage:0.4,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        // position: 'top' as const,
      },
      
    },
    scales: {
      
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display :false,
          drawBorder: false,          
          // color: 'rgba(0, 0, 0, 0.1)',
        },
        
      },
    },
  };

  return(
    <div className='w-full h-full flex flex-col overflow-auto scrollable-chart'>
      <div className=' w-full flex flex-col items-start p-2 mb-5'>
        <h2 className=' font-body font-semibold mb-3'>Nutrients Status</h2>
        <div className=' w-full flex space-x-10'>
          <div className=' flex justify-center items-center'>
            <div className=' w-3 h-3 bg-[#191A19] rounded-full mr-3'></div>
            <p className=' font-body text-sm text-[#425466]'>Nitrogen</p>
          </div>
          <div className=' flex justify-center items-center'>
            <div className=' w-3 h-3 bg-[#1E5128] rounded-full mr-3'></div>
            <p className=' font-body text-sm text-[#425466]'>Phosphorus</p>
          </div>
          <div className=' flex justify-center items-center'>
            <div className=' w-3 h-3 bg-[#4E9F3D] rounded-full mr-3'></div>
            <p className=' font-body text-sm text-[#425466]'>Potassium</p>
          </div>
          
        </div>
      </div>
      <div className='w-[2000px] h-[500px] '>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default NutrientsBarchart;
