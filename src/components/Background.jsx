import React from 'react'
import Box from '@mui/material/Box';
import backgroundImg from '../assets/bg.png'
import { Button, Typography } from '@mui/material';



function Background() {
  return (
    
      <Box>
        <Box
        height="479px"
        width="420px"
        Top="205px"
        Left="198px"
        sx={{ backgroundImage: `url(${backgroundImg})`, backgroundSize:'cover' }}>
        </Box>
        <Box>
        <Typography variant="h2" color="rgba(88, 84, 84, 1)" fontWeight="bold">Remove Image</Typography>
        <Typography variant="h2" color="rgba(88, 84, 84, 1)" fontWeight="bold">Background</Typography>
        </Box>
        </Box>


    
  )
}

export default Background

