const handleColor = (value) => {
  if (value > 0) {
    return 'has-text-success'
  } else if (value < 0) {
    return 'has-text-danger'
  }

  return 'has-text-dark'
}

function Count({ value }) {
  return (
    <div
      className={`content ${handleColor(value)} is-size-1 has-text-centered`}
    >
      {value}
    </div>
  )
}

export default Count
