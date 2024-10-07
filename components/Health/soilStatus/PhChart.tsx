"use client";
import { Chart, ArcElement, Tooltip, Legend, Plugin } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend);

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
    const fontSize = (height / 200).toFixed(2);
    ctx.font = `normal ${fontSize}em Arial`;
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const data = chart.data.datasets[0].data;
    const phLevels = [3, 7, 10];

    // Calculate average pH level
    const total = data.reduce((acc, val) => acc + val, 0);
    const weightedSum = data[0] * phLevels[0] + data[1] * phLevels[1] + data[2] * phLevels[2];
    const avgPhLevel = (weightedSum / total).toFixed(1);
    const line1 = 'Ph Level';
    const line2 = avgPhLevel;

    // Adjust the Y position to bring the text upward and keep it centered
    const adjustedCenterY = centerY - ((height / 2) * (1 - cutoutPercentage)) / 4;
    const lineHeight = height /5;
    ctx.fillText(line1, centerX, adjustedCenterY - lineHeight / 2);

     ctx.font = `bold ${(height / 100).toFixed(2)}em Arial`; 
     ctx.fillStyle = '#ffffff';
     ctx.textAlign = 'center';
     ctx.fillText(line2, centerX, adjustedCenterY + lineHeight / 2);

    ctx.restore();
  },
};

const PhChart = () => {
  const data = {
    labels: ['Acidic', 'Neutral', 'Alkaline', 'No Data'],
    datasets: [
      {
        label: 'pH Level',
        data: [15, 25, 10, 50],
        backgroundColor: ['#FF4D4D', '#F5DD1B', '#007BFF', '#ffffff'],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '90%', // Increase this percentage to make the doughnut ring thinner
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div className=" h-[300px] flex flex-col justify-center items-center w-full p-4 bg-secondary rounded-xl">
      <div className=' flex w-full'>
        <div className="w-1/2 h-[200px]">
          <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        </div>
        <div className="flex flex-col justify-center w-1/2 pl-6 text-white ">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-[#FF4D4D] mr-2"></div>
            <span className='font-body'>Acidic</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-[#F5DD1B] mr-2"></div>
            <span className='font-body'>Neutral</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-[#007BFF] mr-2"></div>
            <span className='font-body'>Alkaline</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#D3D3D3] mr-2"></div>
            <span className='font-body'>No Data</span>
          </div>
        </div>
      </div>
      <div className=' w-full flex justify-start items-center mt-10'>
        <img src="/warn.svg" alt="img" className=' w-10 h-10' />
        <p className=' ml-2 text-white font-body'>Apply Organic matter Use standard fertilizers</p>
      </div>
    </div>
  );
};

export default PhChart;
