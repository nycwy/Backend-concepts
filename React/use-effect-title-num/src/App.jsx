import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  )
}

export default App
