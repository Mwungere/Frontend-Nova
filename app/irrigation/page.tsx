"use client"

import Irrigation from "@/components/Irrigation/Irrigation";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export interface SensorDataType {
  time: Date;
  temperature: string;
  moisture: string;
}


const Page = () => {
  const [sensorData, setSensorData] = useState<SensorDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if(!jwt || jwt.length ==0){
      toast.error("Not authorized to reach this page",{duration:3000, position:"top-right"})
      router.replace("/signin");
    }
    Pusher.logToConsole = true;
    var pusher = new Pusher('b474acc965ca822765e5', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('nova_data');
    channel.bind('sensor_data_event', function (data: SensorDataType) {
      setSensorData((prevData) => [...prevData, data]);
      setLoading(false);
      const timestamp = new Date(data.time);
      const hour = timestamp.getHours();
      const minute = timestamp.getMinutes();
      console.log(`Hour: ${hour}, Minute: ${minute}`);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className=" h-screen flex justify-center items-center">
                  <CircularProgress color="success" className="flex justify-center items-center" />

        </div>
      ) : sensorData.length > 0 ? (
        <Irrigation sensorData={sensorData} />
      ) : (
        <div>No sensor data available</div>
      )}
    </div>
  );
};

export default Page;
