import Navbar from '@/components/Navbar'
import Pricing from '@/components/pricing/Pricing'
import React from 'react'

const PricingPage = () => {
  return (
      <main className=' bg-[#1D6923] p-4 overflow-hidden'>
        <Navbar
        containerStyles=' bg-[#EBEFFF]'
         /> 
        <Pricing />
      </main> 
      
    
  )
}


export default PricingPage
