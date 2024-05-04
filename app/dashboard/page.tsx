"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import Cookies from "js-cookie"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
const page = () => {
  const router = useRouter();
 
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default page
