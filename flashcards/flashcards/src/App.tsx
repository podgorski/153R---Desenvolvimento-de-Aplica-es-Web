import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Game from './pages/Game'
import Dashboard from './pages/Dashboard'

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { UserProvider } from './context/user'

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='game' element={<Game />} />
            </Route>


            <Route path='/' element={<Navigate to={'/login'} />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>


      {/* <Login />
      <Game />
      <Dashboard /> */}
    </>
  )
}

export default App
