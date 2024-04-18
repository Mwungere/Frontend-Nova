
"use client"
import Irrigation from "@/components/Irrigation/Irrigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js"

export interface SensorDataType{
  time:Date,
  temperature:string,
  moisture:string
}
const page = () => {
  const [sensorData, setSensorData] = useState<SensorDataType[] >([]);
  useEffect(()=>{
    Pusher.logToConsole =true
    var pusher = new Pusher('b474acc965ca822765e5', {
      cluster: 'eu'
    })
   
    var channel = pusher.subscribe('nova_data');
    channel.bind('sensor_data_event', function(data: SensorDataType) {
      setSensorData((prevData) => [...prevData, data]);
      const timestamp = new Date(data.time);
      const hour = timestamp.getHours();
      const minute = timestamp.getMinutes();
   console.log(`Hour: ${hour}, Minute: ${minute}`);
    });
    
   })
  return (
    <div>
      {
        sensorData.length > 0 && <Irrigation sensorData={sensorData} />
      }
    </div>
  );
};

export default page;
