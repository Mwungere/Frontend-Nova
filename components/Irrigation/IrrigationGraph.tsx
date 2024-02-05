import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  
  yAxis: [
    {
      label: 'Moisture (mm)',
    
      
    },
  ],
  // width: 800,
  // height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px,0)',
      
    },
    BarProp:{

    }
  },
};
const dataset = [
  {
    time: '7:00am',
    moisture: 59,
  
  },
  {
    time: '8:00am',
    moisture: 50,
    
  },
  {
    time: '9:00am',
    moisture: 47,
   
  },
  {
    time: '10:00am',
    moisture: 54,
 
  },
  {
    time: '11:00am',
    moisture: 57,
 
  },
  {
    time: '12:00am',
    moisture: 60,

  },
  {
    time: '1:00pm',
    moisture: 59,
 
  },
  {
    time: '2:00pm',
    moisture: 65,

  },
  {
    time: '3:00pm',
    moisture: 51,

  },
  {
    time: '4:00pm',
    moisture: 60,

  },
  {
    time: '5:00pm',
    moisture: 67,
 
  },
  {
    time: '6:00pm',
    moisture: 61,
  
  },
];

const valueFormatter = (value: number) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart

      slotProps={{
        legend:{
          labelStyle:{
           
          }
        }
        
      }}
      
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'time' }]}
      series={[
        { dataKey: 'moisture', label: 'moisture', valueFormatter }
      ]}
      {...chartSetting}
    />
  );
}