import { Box } from '@mui/material'
import React from 'react'
import Background from './Background'
import Mbar from './Mbar'



const Index = () => {
  return (
    <Box sx={{justifyContent:"center"}}>
    <Box sx={{display:"flex",justifyContent:"space-around"}}>
    <Background></Background> 
    <Mbar></Mbar>
  </Box>
  </Box>
  )
}

export default Index