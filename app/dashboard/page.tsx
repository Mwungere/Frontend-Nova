"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import { UserContextProvider } from '@/app/context/UserContext'
import React, { useEffect, useState } from 'react'

const page = () => {
  return (
    <UserContextProvider>
            <Dashboard />
    </UserContextProvider>
  )
}

export default page
