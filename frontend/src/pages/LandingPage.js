import { Stack } from '@mui/material'
import React from 'react'
import Header from '../components/header/Header'
import RequirementForm from '../components/submitform/RequirementForm'

function LandingPage() {
  return (
    <>
    <Header/>
    <Stack direction='row'  justifyContent='center' >
        <RequirementForm/>
        </Stack>
    
    </>
  )
}

export default LandingPage
