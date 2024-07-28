import React from 'react'
import './App.css'
import Homepage from './routes/Homepage/Homepage'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <nav>
        <Header/>
      </nav>
      <Homepage/>
    </>
  )
}

export default App
