import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return (() => {
      clearInterval(intervalId);
    })
  },[])

  return (
    <>
      <h2>{count}</h2>
    </>
  )
}

export default App