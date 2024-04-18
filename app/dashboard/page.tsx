"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import Cookies from "js-cookie"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
const page = () => {
  const router = useRouter();
  useEffect(()=>{
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
