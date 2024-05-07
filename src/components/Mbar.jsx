import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../assets/small1.jpg'
import bgImage2 from '../assets/small2.jpg'
import bgImage3 from '../assets/small3.jpg'
import bgImage4 from '../assets/small4.jpg'
import bgImage5 from '../assets/bg2.jpg'
const Mbar = () => {
  
  return (
    <Box sx={{display:"flex",flexDirection:"column",width:"400px",height:"300px",borderRadius:"24px",alignItems:"center",boxShadow:"0px 0px 50px 0px rgba(0, 0, 0, 0.13)"}}>
    <Box sx={{mt:"140px",ml:"30px"}} >
        <Button variant='contained' sx={{bgcolor:"rgba(12, 157, 189, 1)",borderRadius:"30px",'&:hover':{
            bgcolor:"rgba(12, 157, 189, 1)",
        }}}>Upload Images</Button>
        <Typography variant='subtitle2' sx={{color:"rgba(88, 84, 84, 1)",fontFamily:"Lato",fontWeight:"800",mt:"20px",lineHeight:"24px",letterSpacing:" 0.20000000298023224px",paddingLeft:"35px",marginBottom:"5px"}}> or drop a file,</Typography>
        <Typography variant='subtitle2' sx={{fontFamily:"Lato",fontSize:"20px",fontWeight:"300",lineHeight:"24px",letterSpacing:"0.20000000298023224px"}}>Paste image here or <a href='#' style={{color:"rgba(91, 157, 238, 1)"}}>URL</a>
        </Typography>
    </Box>
    <Box sx={{display:"flex",mt:"80px",mr:"200px"}}>
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography variant='subtitle2' sx={{fontWeight:"800px"}}>No image?</Typography>
        <Typography variant='subtitle2' sx={{fontWeight:"800px",}}>Try one of these</Typography>
    </Box>
    <Box sx={{display:"flex",height:"50px",width:"90px",ml:"30px"}}> 
      <img  src={bgImage} style={{marginRight:"8px",width:"80px",borderRadius:"7px"}}></img>
      <img  src={bgImage2} style={{marginRight:"8px",width:"80px",borderRadius:"7px"}}></img>
      <img  src={bgImage3} style={{marginRight:"8px",width:"80px",borderRadius:"7px"}}></img>
      <img  src={bgImage4} style={{width:"80px",borderRadius:"7px"}}></img>
    </Box>
</Box>
<Box sx={{mt:"200px",mr:"600px",display:"flex",flexDirection:"column"}}>
<Box sx={{width:"500px",mr:"450px",ml:"250px"}}><Typography variant="h2" color="rgba(88, 84, 84, 1)" fontWeight="bold">Stunning Quality</Typography></Box>
<Box sx={{height:"100px",width:"100px",justifyContent:"space-between",mt:"48px",paddingLeft:"100px"}}>
  <img src={bgImage5} style={{borderRadius:"20px"}}></img>
</Box>
</Box>
</Box>
  )
}

export default Mbar
