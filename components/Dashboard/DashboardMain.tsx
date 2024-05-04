import { Stack, Typography } from '@mui/material'
import React from 'react'

const DashboardMain = () => {
  return (
    <Stack spacing={4} sx={{padding:"1.25rem"}}>
      <Typography variant='h4'>Hello, Smith</Typography>
      <Typography variant='h1'> Ooops....</Typography>
      <Typography variant='h3'>Page Not Ready Yet</Typography>
      <Typography variant='h4'>Ready to set up your farm!!</Typography>
    </Stack>
  )
}

export default DashboardMain
