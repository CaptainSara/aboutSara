import React from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './style.css'

import StartPage from './pages/StartPage'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Header />
      <StartPage />
      <AboutPage />
      <Services />
      {/* <Portfolio/> */ }
      <Footer/>
    {/* <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={ <StartPage /> } />
      </Routes>
      </BrowserRouter> */}
      </main>
    )
}

