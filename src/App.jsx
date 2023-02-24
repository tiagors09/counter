import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="child">
        <div className="title">Counter</div>
        <div
          className="count"
          style={{
            color: count > 0 ? 'green' : '#222222',
          }}
        >
          {count}
        </div>
        <div className="buttons">
          <button
            id="decrease"
            onClick={() => {
              if (count > 0) {
                setCount((count) => count - 1)
              }
            }}
          >
            INCREASE
          </button>
          <button
            id="reset"
            onClick={() => {
              if (count != 0) {
                setCount(0)
              }
            }}
          >
            RESET
          </button>
          <button
            id="increase"
            onClick={() => {
              setCount((count) => count + 1)
            }}
          >
            INCREASE
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
