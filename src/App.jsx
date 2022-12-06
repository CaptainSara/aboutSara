import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import StartPage from './pages/StartPage'
import Header from './components/Header'


export default function App() {
  return (
    <main>
      <h1>Sara</h1>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={ <StartPage /> } />
          <Route path="/H" element={<Header/>}/>
      </Routes>
      </BrowserRouter>
      </main>
    )
}

