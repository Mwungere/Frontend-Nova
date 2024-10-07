"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserProfile from './UserProfile';
import Payment from './Payment';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='min-w-[100%] flex flex-col'
    >
      {value === index && <div className=' w-full flex justify-center items-center'>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const SettingsTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <div className=' w-full flex justify-center items-center text-secondary'>
      <div className='min-w-[100%] max-w-[100%]  md:max-w-[825px] lg:min-w-[100%] md:min-w-[820px] xl:max-w-full flex flex-col md:justify-center md:items-center'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          textColor='inherit'
          TabIndicatorProps={{
            style: {
              backgroundColor: "#1F6115"
            }
          }}
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          <Tab label="User Profile" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}}  />
          <Tab label="Login & Security" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}} />
          <Tab label="Language and region" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}} />
          <Tab label="Transaction" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}} />
          <Tab label="Terms of service" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}} />
          <Tab label="Data Policy" sx={{ textTransform: 'capitalize', fontFamily: 'Lexend', fontWeight: 'bold'}} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <UserProfile /> 
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Payment />
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default SettingsTabs;
