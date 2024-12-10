import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from '../src/services/authService'
import * as travelService from '../src/services/travelService'
import './App.css'

import TravelList from './components/TravelList/TravelList'

export const AuthedUserContext = createContext(null)



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [travels, setTravels] = useState([])

  useEffect(() => {
    const fetchAllTravels = async () => {
      const travelsData = await travelService.index()
      console.log('travelsData', travelsData)
      setTravels(travelsData)
    }
    if (user) fetchAllTravels()
  }, [user] )
  
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  return (
    <>
      <AuthedUserContext.Provider value={user}>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        { user ? (
          < >
          <Route path='/' element={<Dashboard user={user} />} />
          <Route path='travels' element={<TravelList travels={travels} />} />
          </>
        ) : (
          <Route path='/' element={<Landing />} />  
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
      </AuthedUserContext.Provider>
      
    </>
  )
}

export default App
