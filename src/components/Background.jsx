import React from 'react'
import Box from '@mui/material/Box';
import backgroundImg from '../assets/bg.png'
import { Button, Typography } from '@mui/material';



function Background() {
  return (
    
      <Box sx={{m:"auto"}}>
        <Box
        height="400px"
        width="400px"
        sx={{ backgroundImage: `url(${backgroundImg})`, backgroundSize:'cover' }}>
        </Box>
        <Box>
        <Typography variant="h3" color="rgba(88, 84, 84, 1)" fontWeight="bold">Remove Image</Typography>
        <Typography variant="h3" color="rgba(88, 84, 84, 1)" fontWeight="bold">Background</Typography>
        </Box>
        </Box>


    
  )
}

export default Background

