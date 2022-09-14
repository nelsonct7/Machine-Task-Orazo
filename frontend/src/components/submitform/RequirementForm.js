import { Alert, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { submitRequirements } from '../../store/api'

function RequirementForm() {
  const [serverError,setServerError]=useState("")
  const initialValues={
    first_name:"",
    second_name:"",
    mobile:"",
    email_id:"",
    requirements:""
  }
  const validationSchema = Yup.object({
    first_name: Yup.string()
             .required('Required')
             .max(50),
    second_name: Yup.string()
             .required('Required')
             .max(50),
    mobile: Yup.string().matches(/^\d{10}$/,"Invalid Mobile Number")
             .required('Required')
             .max(10),
    email_id: Yup.string().email()
              .required('Required'),
    requirements: Yup.string()
                .required('Required')
                .max(50),
    });
    const formik = useFormik({
      initialValues:initialValues,
      validationSchema: validationSchema,
      onSubmit: async(values) => {
        submitRequirements(values).then((data)=>{
          alert("Success")
          handleReset()
        }).catch((error)=>{
          setServerError(JSON.stringify(error.message)) 
        })
      },
      });

  const handleSubmit=()=>{
    formik.handleSubmit()
  }
  const handleReset=()=>{
    formik.resetForm()
    setServerError("")
  }

  return (
    
      <Box sx={{width:'500px',boxShadow:'5',p:3,m:3}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb:2}}>
            Fillup the form
          </Typography>
          <TextField 
          id="outlined-basic" 
          label="First Name" 
          variant="outlined" 
          name="first_name"
          value={formik.values.first_name} 
          onChange={formik.handleChange}
          fullWidth
          sx={{mb:2}}
          required
          />
        {formik.errors.first_name ? <Alert severity="error" sx={{mb:2}}>{formik.errors.first_name}</Alert> : null}
        <TextField 
          id="outlined-basic" 
          label="Second Name" 
          variant="outlined" 
          name="second_name"
          value={formik.values.second_name} 
          onChange={formik.handleChange}
          fullWidth
          sx={{mb:2}}
          required
          />
         {formik.errors.second_name ? <Alert severity="error" sx={{mb:2}}>{formik.errors.second_name}</Alert> : null}
        <TextField 
          id="outlined-basic" 
          label="Phone Number" 
          variant="outlined" 
          name="mobile"
          value={formik.values.mobile} 
          onChange={formik.handleChange}
          fullWidth
          sx={{mb:2}}
          required
          />
          {formik.errors.mobile ? <Alert severity="error" sx={{mb:2}}>{formik.errors.mobile}</Alert> : null}
        <TextField 
          id="outlined-basic" 
          label="Email Id" 
          variant="outlined" 
          name="email_id"
          value={formik.values.email_id} 
          onChange={formik.handleChange}
          fullWidth
          sx={{mb:2}}
          required
          />
          {formik.errors.email_id ? <Alert severity="error" sx={{mb:2}}>{formik.errors.email_id}</Alert> : null}

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Requirements</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="requirements"
          value={formik.values.requirements} 
          label="Event Type"
          onChange={formik.handleChange}
          
          sx={{mb:2}}
          >
          <MenuItem value={"Design"}>Design</MenuItem>
          <MenuItem value={"Website"}>Website</MenuItem>
          <MenuItem value={"Social Media Promotion"}>Social Media Promotion</MenuItem>
          <MenuItem value={"Digital Marketing"}>Digital Marketing</MenuItem>
        </Select>
        </FormControl>
        {formik.errors.requirements ? <Alert severity="error" sx={{mb:2}}>{formik.errors.requirements}</Alert> : null}
        <Box sx={{display:'flex',margin:2}} gap={2}>
          <Button variant="contained" component="label" sx={{maxHeight:40}} onClick={handleSubmit} color="success">Update</Button>
          <Button variant="contained" component="label" sx={{maxHeight:40}} color="error" onClick={handleReset}>Clear</Button>
          </Box>
          {serverError ? <Alert severity="error" sx={{mb:2,mt:2}}>{serverError}</Alert> : null}
        </Box>
  )
}

export default RequirementForm
