import React,{useCallback} from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,} from '@mui/material'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../../store/features/adminSlice';
function Sidebar({setVisi}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleClick=useCallback((value)=>{
        setVisi(value)
    },[setVisi])
    const handleLogout=()=>{
        dispatch(logout({navigate}))
    }
  return (
    <Box sx={{ width: '100%', maxWidth: 200,padding:2, height:'90vh',marginBottom:1,borderRadius:2,boxShadow:10,display:{xs:'none',sm:'block',textAlign:'center' }}} >
    <Box sx={{boxShadow:10,bgcolor:'#613dc1',height:'50px',borderRadius:2,justifyContent:'space-between' }}>
    <h2>Admin Panel</h2>
    </Box>
    <Box sx={{boxShadow:3}}>
    <nav aria-label="main mailbox folders">
      <List sx={{marginTop:4}}>
        <ListItem disablePadding onClick={()=>handleClick("dashboard")}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardCustomizeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={()=>handleClick("enquiries")}>
          <ListItemButton>
            <ListItemIcon>
              <SupervisedUserCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Enquiries" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={()=>handleLogout()}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  </Box>
  </Box>
  )
}

export default Sidebar
