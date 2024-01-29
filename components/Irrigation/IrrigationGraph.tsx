"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 800,
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    london: 59,

    month: 'Jan',
  },
  {
    london: 50,
    month: 'Fev',
  },
  {
    london: 47,
    month: 'Mar',
  },
  {
    london: 54,
    month: 'Apr',
  },
  {
    london: 57,
    month: 'May',
  },
  {
    london: 60,
    month: 'June',
  },
  {
    london: 59,
    month: 'July',
  },
  {
    london: 65,
    month: 'Aug',
  },
  {
    london: 51,
    month: 'Sepsudo useradd -r -m -U -d /opt/tomcat -s /bin/false tomcat t',
  },
  {
    london: 60,
    month: 'Oct',
  },
  {
    london: 67,
    month: 'Nov',
  },
  {
    london: 61,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london'},
       
      ]}
      {...chartSetting}
    />
  );
}