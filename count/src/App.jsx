import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Saurabh</h1>
    <Card username = "unlosck with s" btntext= "use me"/>

    <br />
    <Card username = "Code iwth s" btntext= "click me"/>

    
    </>
  )
}

export default App
