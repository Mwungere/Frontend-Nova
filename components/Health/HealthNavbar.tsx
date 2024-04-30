"use client";
import { MoreVertOutlined } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import CustomizedMenus from './DropDown'
import { usePathname } from 'next/navigation'

const HealthNavbar = () => {
    // const [open, setOpen] = useState<Boolean>(false)
    const pathname = usePathname()
    const links=[
        {
            name: 'Disease Identification',
            link: '/health'
        },
        {
            name: 'Plant Detection ',
            link: '/health/plant-detection'
        },
        {
            name: 'Health condition ',
            link: '/health/health-condition'
        },
        {
            name: 'Disinfectant',
            link: '/health/disinfectant'
        },
        {
            name: 'Agronomy',
            link: 'health/agronomy'
        },
    ]
  return (
    <div className=' w-full h-full'>
        
       <div className=' w-full h-full lg:justify-between top-28 hidden lg:flex'>
       {
            links.map(({name, link}, index) => {
                const isActive = pathname.endsWith(link)
                return(
                    <div className={`border-b-2 ${isActive? 'text-[#1F6115] border-secondary': ''}`} key={index}>
                        <Link href={link}>
                            <p className="font-body">
                                {name}
                            </p>
                        </Link>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default HealthNavbar