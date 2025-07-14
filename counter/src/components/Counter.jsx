import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, seCount] = useState(0)
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn' onClick={() => {seCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default Counter