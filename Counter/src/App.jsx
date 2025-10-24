import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hello from './Components/Hello.jsx'
import Props from './Components/Props.jsx'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button >
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <h3>Props</h3>
        <Props name="sunny" age="21"/>
        <Props name="Rohit" age="22"/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
