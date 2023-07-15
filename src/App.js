import './App.css'
import { useState } from 'react'
// import Landing from './comps/landing'

let App = () => {
  const [name , setName] = useState('unes')
  return (
    <div className='App'>
      <h1>Hello {name}</h1>
      <button onClick={()=>{setName('Amir')}}>click</button>
    </div>
  )
}

export default App