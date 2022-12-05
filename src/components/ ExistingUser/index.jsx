import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ExistingUser({ user, removeUser }) {
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
    <Typography variant="h3" style={{ color: 'black' }}>
      у вас уже существует пользователь под именем: {user}
      </Typography>
      <Typography onClick={() => navigate('/chat')} mt={3} mb={3} variant="h3" style={{ color: 'black' }}>
      Вернуться в чат
        </Typography>
      <Button variant="contained" onClick={removeUser}>Создать нового пользователя</Button>
  </Box>
  )
}
