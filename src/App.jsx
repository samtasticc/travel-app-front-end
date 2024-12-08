import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
      <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        { user ? (
          <Route path='/' element={<Dashboard user={user} />} />
        ) : (
          <Route path='/' element={<Landing />} />  
        )}
      </Routes>
    </>
  )
}

export default App
