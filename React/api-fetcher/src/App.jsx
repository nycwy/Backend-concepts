import { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data = await res.json();
      setTodo(data);
    }
    getData();
  }, []);

  if (!todo) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>API data Fetched: </h1>
      <p>{todo.title}</p>
    </div>
  )
}

export default App
