import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cnt, setCnt] = useState(0);
  const add = ()=>setCnt(cnt+1);
  const sub = ()=>setCnt(cnt-1);
  return (
    <>
      <header>{cnt}</header>
      <h5>Counter is: {cnt}</h5>
      <button onClick={add}>Add Value</button>
      <button onClick={sub}>Remove Value</button>
      <footer>{cnt}</footer>
    </>
  )
}

export default App
