import React, { useEffect, useState } from 'react'
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import { Box, Button, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';



export default function ChatPage({ user, people }) {
  const [input, setInput] = useState('')
  const [value, setValue] = useState(() => {
    const data = JSON.parse(localStorage.getItem('message'))
    return data || []
  })
  const userName = people.filter((el) => el === user).toString()

  const inputHandler = (e) => setInput(e.target.value)
  
  const submitHandler = () => {
    if (input) {
      setValue([...value, {name: userName, message: input }])
      setInput('')
    }
  }

  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(value))
    sessionStorage.setItem('name', JSON.stringify(user));
    localStorage.setItem('name', JSON.stringify(people))
  }, [value, user, people ])
    
  return (
    <>
        <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            >
            <TextField placeholder='написать сообщение...' sx={{ width: '100%', marginRight: '10px' }} type="text" onChange={inputHandler} value={input} />
            <Button variant="contained" color="success" onClick={submitHandler}><SendIcon/></Button>
          </Box>
          <Box sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: '0%',
          }}>
          {people?.filter((el) => el !== user).map((el) => <Typography variant='1' mt={1} ml={2}><PersonIcon />{el}</Typography>)}
          </Box>
      </Box>
      <ChatBox>
        {value.map((el) => ((el.name === user)
          ? <SenderMessage avatar={el.name}>
          {el.message}
          </SenderMessage> 
          : <ReceiverMessage avatar={el.name}>
          {el.message}
        </ReceiverMessage>
        ))}
        </ChatBox>
      </>
  )
}
