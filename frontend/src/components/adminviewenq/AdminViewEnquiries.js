import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { getRequirements } from '../../store/api'
import moment from 'moment'

function AdminViewEnquiries() {
    const [enqList,setEnqList]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            await getRequirements().then((data)=>{
              setEnqList(data.data.data)
            }).catch((err)=>{
              console.log(err);
            })
        }
        getData();
    },[])

  return (
    <Grid container spacing={2} sx={{p:3}} marginTop={400}>
    <Grid item xs={12}><Typography variant='h4'>Enquiry List</Typography></Grid>
    <Grid item xs={10}>
    <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650}} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell align="right">First Name</TableCell>
        <TableCell align="right">Last Name</TableCell>
        <TableCell align="right">Email Id</TableCell>
        <TableCell align="right">Mobile</TableCell>
        <TableCell align="right">Requirements</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {enqList?.map((enq,index) => (
        <TableRow
          key={enq._id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {moment(enq.createdAt).format("MMM Do YY")}
          </TableCell>
          <TableCell align="right">{enq.first_name}</TableCell>
          <TableCell align="right">{enq.second_name}</TableCell>
          <TableCell align="right">{enq.email_id}</TableCell>
          <TableCell align="right">{enq.mobile}</TableCell>
          <TableCell align="right">{enq.requirements}</TableCell>
          
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </Grid>
</Grid>
  )
}

export default AdminViewEnquiries
