import { Button, Grid, TextField } from '@mui/material'
import React from 'react'


function Dashboard() {

  return (
    <Grid container sx={{mt:4,alignItems:'start', gap:2, border:'2px', borderRadius:3,display:'flex',flexDirection:'column'}}>
      <Grid item>
        <h1>Admin Dash Board</h1>
      </Grid>
    </Grid>
  )
}

export default Dashboard
