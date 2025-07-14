import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setcounter] = useState(0)
 // let counter = 15

  const addValue = () => {
    setcounter(counter + 1)

  }

  const removeValue = () => {
    setcounter(counter - 1)
  }
  

  return (
    <>
     <h1>React course with Neelansh {counter}</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button> {" "}
     <button onClick={removeValue}>remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
