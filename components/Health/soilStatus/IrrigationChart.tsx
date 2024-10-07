"use client"
import { weatherData } from '@/constants';
import { WeatherDataType } from '@/types';
import { BeachAccess, Cloud, LocationOn, Water } from '@mui/icons-material';
import { Chart, ChartType, ArcElement, Tooltip, Legend, Plugin } from 'chart.js';
import Image from 'next/image';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

// Define the plugin for center text in doughnut chart
const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    ctx.save();

    // Retrieve cutout value safely, default to 50% if undefined
    const cutoutValue = chart.config.options?.cutout ?? '50%';

    let cutoutPercentage = 0.5; // Default cutout percentage (50%)
    if (typeof cutoutValue === 'string' && cutoutValue.includes('%')) {
      cutoutPercentage = parseFloat(cutoutValue) / 100;
    } else if (typeof cutoutValue === 'number') {
      cutoutPercentage = cutoutValue / 100;
    }

    const centerX = width / 2;
    const centerY = height / 2;

    // Adjust font size dynamically based on chart size
    const fontSize = (height / 220).toFixed(2);
    ctx.font = `normal ${fontSize}em Arial`;
    ctx.fillStyle = '#838ea1';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const data = chart.data.datasets[0].data;

   
    const avgWaterLevel = (100 * data[0])/(data[0] + data[1]);

    const line1 = 'Completed';
    const line2 = `${avgWaterLevel}%`;

    // Adjust the Y position to bring the text upward and keep it centered
    const adjustedCenterY = centerY - ((height / 2) * (1 - cutoutPercentage)) / 4;


     // Adjust line spacing
     const lineHeight = height / 5;

     // Draw the first line
     ctx.fillText(line1, centerX, adjustedCenterY - lineHeight / 2); 
  

    // Draw the second line

    ctx.font = `bold ${(height / 120).toFixed(2)}em Arial`;
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(line2), centerX, adjustedCenterY + lineHeight / 2);

    ctx.restore();
  },
};

const getWeatherIcon = (weather: WeatherDataType) => {
  switch (weather.weather.toLowerCase()) {
    case "sunny":
      return (
        <Image
          src={"/sunny.svg"}
          width={74}
          height={88}
          alt="sunny"
          className="mt-[10%]"
        />
      );
    case "rainy":
      return <Water />;
    case "cloudy":
      return <Cloud />;
    default:
      return <BeachAccess />;
  }
};

// Doughnut chart component
const IrrigationChart = () => {
  const data = {
    labels: ['Water', 'No Data'],
    datasets: [
      {
        label: 'Irrigation Progress',
        data: [75, 25],
        backgroundColor: ['#74b5fa', '#ffffff'],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '80%', // Increase this percentage to make the doughnut ring thinner
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div className=" flex h-[300px]  justify-center items-center w-full p-4 bg-white rounded-xl mt-5 md:mt-0">
      <div className=" w-1/2 flex flex-col justify-center items-center">
        <div className="flex justify-start w-full pt-2">
          <p className="font-body text-lg font-normal">Irrigation</p>
          
        </div>
        <div className="flex justify-center items-center my-4 md:space-x-10">
          <div>{getWeatherIcon(weatherData)}</div>
          <div className="flex justify-center items-center">
            <p className="text-xl lg:text-4xl font-body font-medium mt-[5%]">
              21&deg;<span className=' font-thin'>C</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start w-full">
          <p className="font-body font-normal mb-8">
            Irrigation Updates
          </p>
          <div className=' w-full flex flex-col lg:flex-col justify-between'>
            <p className="font-body font-semibold mb-4 flex">
              <span className="text-[#838ea1]">Prev: </span>
              <span>10:00 am</span>
            </p>
            <p className="font-body font-semibold text-secondary flex">
              <span className="text-[#838ea1]">Status: </span>
              <span>{weatherData.state}</span>
            </p>
          </div>
        </div>
      </div>
      <div className=' flex flex-1 flex-col lg:flex-row w-1/2'>
        <div className=" w-full h-[250px] flex justify-center items-center">
          <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        </div>
      </div>

    </div>
  );
};

export default IrrigationChart;
