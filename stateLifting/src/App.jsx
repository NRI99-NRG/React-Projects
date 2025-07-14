import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")


  return (
    <>
     <Card name = {name} setName = {setName} />
     <p>I am inside Parent component and value of name is : {name}</p>
    </>
  )
}

export default App
