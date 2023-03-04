import './style.css'

function Button({ text, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
