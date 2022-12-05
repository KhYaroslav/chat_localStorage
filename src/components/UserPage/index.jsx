import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ExistingUser from '../ ExistingUser';


export default function UserPage({ user, setUser, setPeople, people }) {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const filter = people.filter((el) => el !== user)

  const inputHandler = (e) => setInput(e.target.value)

  const submitHandler = () => {
    if (input) {
      setUser(input)
      setPeople([...people,input])
      setInput('')
      navigate('/chat')
    }
  }

  const removeUser = () => {
    setUser('')
    sessionStorage.clear()
    setPeople(filter)
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(people))
  }, [people])

  return (
  <>
      {!user ?
        <Box className='user__box' sx={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          overflow: 'auto',
        }}>
          <TextField sx={{ width: "25%", marginRight: '10px' }} fullWidth label="Введите имя пользователя..." id="fullWidth" onChange={inputHandler} value={input} />
          <Button variant="contained" color="success" disabled={!input.length} onClick={submitHandler}><SendIcon/></Button>
          </Box >
          : 
        <ExistingUser user={user} removeUser={removeUser}/>
    }
    </>
  )
}