import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fact , setfact] =useState("");
  
  return(
    <>
    <div 
    style={{ textAlign: "center", marginTop: "2rem" }}
    >
      <h2>🐱 Random Cat Fact</h2>
      </div>

    </>
  )
}

export default App
