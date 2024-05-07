import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import logoimg from '../assets/logo.png'

 function ButtonAppBar() {
  return (
    <Box >
      <Toolbar
      sx={{Height:"14px",Width:"84px",bgcolor:"rgba(255, 255, 255, 1)",justifyContent:"space-between",
      boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.25)'}}>
        <Box sx={{mb:"3px"}}>
        <KeyboardArrowLeftIcon
        sx={{fontSize:"23px",color:"#6D6767"}}
        />
        <KeyboardArrowRightIcon
        sx={{fontSize:"24px",color:"#6D6767"}}
        />
        </Box>
        <img src={logoimg} style={{paddingLeft:"20px"}}></img>
        <Button sx={{width: "2px",
        height:"24px",
        color:"#3E3B3B",
        ml:"1000px"
      }}>Login
        </Button>
          <Button 
          sx={{bgcolor:"#D9D9D9",Width:"12px",Height:"80px",borderRadius:"20px",color:"rgba(62, 59, 59, 1)",fontFamily:"Lato",fontWeight:700,fontSize:"16px",letterSpacing:"0.2px",lineHeight:"24px"}}>Sign up
          </Button>
      </Toolbar>
    </Box>
  );
}
export default ButtonAppBar

