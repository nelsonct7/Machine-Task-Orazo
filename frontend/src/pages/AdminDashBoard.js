import { Box, Grid, Stack } from '@mui/material'
import React,{useState,useEffect} from 'react'
import Dashboard from '../components/dashboard/AddItems'
import Sidebar from '../components/sidebar/Sidebar'
import AdminViewEnquiries from '../components/adminviewenq/AdminViewEnquiries'

function AdminDashBoard() {
  const [visibility,setVisibility]=useState("dashboard")
  return (
    <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar setVisi={setVisibility}/>
            {visibility==="dashboard" && <Dashboard/>}
            {visibility==="enquiries" && <AdminViewEnquiries/>}
        </Stack> 
    </Box>
  )
}

export default AdminDashBoard
