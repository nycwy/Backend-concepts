import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const MAX_LIMIT = 20;
  const MIN_LIMIT = 0;

  function add() {
    setCount((prevCount) => {
      if (prevCount < MAX_LIMIT) {
        return prevCount + 1;
      }
    })
  }

  function sub() {
    setCount((prevCount) => {
      if (prevCount > MIN_LIMIT) {
        return prevCount - 1;
      }
    })
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add} disabled={count >= MAX_LIMIT}>Add Value (+)</button>
      <button onClick={sub} disabled={count <= MIN_LIMIT}>Remove Value (-)</button>
    </>
  )
}

export default App
