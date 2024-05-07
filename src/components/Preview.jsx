import { Box,Typography } from "@mui/material"
import bgImage5 from '../assets/bg2.jpg'

const Preview = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",m:10,alignItems:"center",justifyContent:"center"}}>
    <Typography variant="h3" color="rgba(88, 84, 84, 1)" fontWeight="bold">Stunning Quality</Typography>
  <img src={bgImage5}  sx={{height:"100px",width:"100px"}}style={{borderRadius:"20px"}}></img>
</Box>
  )
}

export default Preview