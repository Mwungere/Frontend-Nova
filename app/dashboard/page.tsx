"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import Cookies from "js-cookie"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Pusher from "pusher-js"
const page = () => {
  const router = useRouter();
  useEffect(()=>{
    Pusher.logToConsole =true
    var pusher = new Pusher('b474acc965ca822765e5', {
      cluster: 'eu'
    })

    var channel = pusher.subscribe('nova_data');
    channel.bind('sensor_data_event', function(data: any) {
      console.log(JSON.stringify(data));
      const timestamp = new Date(data.time);
      const hour = timestamp.getHours();
      const minute = timestamp.getMinutes();
console.log(`Hour: ${hour}, Minute: ${minute}`);
    });

    const jwt = Cookies.get("jwt");
    if(!jwt || jwt.length ==0){
      toast.error("Not authorized to reach this page",{duration:3000, position:"top-right"})
      router.replace("/signin");
    }
  },[])
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default page
