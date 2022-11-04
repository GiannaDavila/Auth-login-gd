import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

export default function App() {
  const [user, setUser ] = useState()
  return (
    <Routes>
      {user
      ? <Profile setUser={setUser} />
      :<>
      <Route path="/signup" element={<Signup setUser={setUser}/>}/>
      <Route path="*" element={<Login setUser={setUser}/>}/>
      </>
      }
    
    </Routes>
  );
}


