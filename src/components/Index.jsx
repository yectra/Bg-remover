import { Box } from '@mui/material'
import React from 'react'
import Background from './Background'

import Mbar from './Mbar'


const Index = () => {
  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
    <Background></Background> 
   
   <Mbar></Mbar>
  </Box>
  )
}

export default Index