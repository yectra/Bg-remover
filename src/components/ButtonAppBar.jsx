import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton, Typography } from '@mui/material';
import logoimg from '../assets/logo.png'

 function ButtonAppBar() {
  return (
      <Toolbar
      sx={{Height:"14px",Width:"84px",bgcolor:"rgba(255, 255, 255, 1)",justifyContent:"space-between",
      boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.25)'}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <IconButton> <KeyboardArrowLeftIcon
        sx={{fontSize:"23px",color:"#6D6767"}}
        /></IconButton>
       <IconButton> <KeyboardArrowRightIcon
        sx={{fontSize:"24px",color:"#6D6767"}}
        /></IconButton>
       
         <img src={logoimg} style={{paddingLeft:"20px"}}></img>
        </Box>
       <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
        <Button sx={{width: "2px",
        color:"#3E3B3B",
        mr:2
      }}>Login
        </Button>
          <Button 
          sx={{bgcolor:"#D9D9D9",borderRadius:"20px",color:"rgba(62, 59, 59, 1)"}}>Sign up
          </Button></Box>
      </Toolbar>
  );
}
export default ButtonAppBar

