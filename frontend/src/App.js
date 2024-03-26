import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path='/' element = {<HomePage />}/>
      <Route path='/signUp' element = {<SignUpPage />}/>
      <Route path='/signIn' element = {<SignInPage />}/>
      <Route path='/about' element = {<AboutPage />}/>
      <Route path='/profile' element = {<ProfilePage />}/>
    </Routes>
    </div>
  )
}

export default App