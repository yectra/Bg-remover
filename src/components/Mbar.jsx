import { Box, Button, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import axios from 'axios';

const Mbar = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = () => {
    if (selectedFile) {
      handleUpload();
    } else {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://bgimgremover.azurewebsites.net/remove_background/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'file.jpg');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        height: { xs: 'auto', sm: 200 },
        width: { xs: '100%', sm: 400 },
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.13)',
        margin: 'auto',
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          bgcolor: 'rgba(12, 157, 189, 1)',
          borderRadius: '30px',
          '&:hover': { bgcolor: 'rgba(12, 157, 189, 1)' },
          width: '60%',
          marginBottom: 2,
        }}
      >
        {selectedFile ? 'Upload Images' : 'Select Images'}
      </Button>
      <Typography variant="subtitle2" sx={{ color: 'rgba(88, 84, 84, 1)', fontFamily: 'Lato' }}>
        or drop a file,
      </Typography>
      <Typography variant="subtitle2" sx={{ fontFamily: 'Lato' }}>
        Paste image here or <a href="#" style={{ color: 'rgba(91, 157, 238, 1)' }}>URL</a>
      </Typography>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default Mbar;