import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>React counter usage</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count -1)}>
        Decrement -
        </button>
        <span className='result'>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>
        Increment + 
        </button>
      </div>
    </>
  )
}

export default App
