import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

  const gotnavigate = () => {
    navigate('/About')
  }
  return (
  <div>
      <h1>This is Contact page</h1>
      <button onClick={() => gotnavigate()}>Click me</button>
    </div>
  )
}

export default Contact
