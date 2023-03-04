import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)

  const decrease = () => {
    setCount((count) => count - 1)
  }

  const reset = () => {
    if (count != 0) {
      setCount(0)
    }
  }

  const increase = () => {
    setCount((count) => count + 1)
  }

  return (
    <section className="section">
      <div className="container is-flex is-justify-content-center is-align-content-center is-align-items-center is-align-self-center">
        <div className="box">
          <h1 className="title is-1 has-text-centered">Counter</h1>
          <Count value={count} />
          <div className="buttons is-flex is-justify-content-center is-align-content-center is-align-items-center is-align-self-center">
            <Button text="Decrease" handleClick={decrease} />
            <Button text="Reset" handleClick={reset} />
            <Button text="Increase" handleClick={increase} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
