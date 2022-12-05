import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NoteFound() {
  const navigate = useNavigate()
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'black' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        Страница, которую вы ищете, не существует.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Вернуться на главную</Button>
    </Box>
  );
}