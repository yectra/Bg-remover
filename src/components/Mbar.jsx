import { Box, Button, Typography } from '@mui/material'
import React,{useRef} from 'react'

const Mbar = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '24px',
      height: { xs: 'auto', sm: 200 }, 
      width: { xs: '100%', sm: 400 }, 
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.13)',
      margin: 'auto', 
    }}>
      <Button variant='contained' onClick={handleClick} sx={{
        bgcolor: 'rgba(12, 157, 189, 1)',
        borderRadius: '30px',
        '&:hover': {
          bgcolor: 'rgba(12, 157, 189, 1)',
        },
        width: '60%', 
        marginBottom: 2, 
      }}>
        Upload Images
      </Button>
      <Typography variant='subtitle2' sx={{
        color: 'rgba(88, 84, 84, 1)',
        fontFamily: 'Lato',
      }}>
        or drop a file,
      </Typography>
      <Typography variant='subtitle2' sx={{
        fontFamily: 'Lato',
      }}>
        Paste image here or <a href='#' style={{ color: 'rgba(91, 157, 238, 1)' }}>URL</a>
      </Typography>
      <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} />
    </Box>
  )
}

export default Mbar
