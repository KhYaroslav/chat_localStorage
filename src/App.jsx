import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import ChatPage from './components/ChatPage'
import UserPage from './components/UserPage'
import getSessionStorageOrDefault from './components/services/index'
import NoteFound from './components/NoteFound';

export default function App() {
  const [user, setUser] = useState(
    getSessionStorageOrDefault('name', '')
  )

  const [people, setPeople] = useState(() => {
    const data = JSON.parse(localStorage.getItem('name'))
    return data || []
  })

  return (
    <Routes>
      <Route path="/" element={<UserPage setUser={setUser} user={user} people={people} setPeople={setPeople} />}/>
      <Route path="/chat" element={<ChatPage user={user} people={people} setPeople={setPeople} />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  )
}
