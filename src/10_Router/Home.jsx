import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

  const gotnavigate = () => {
    navigate('/Contact')
  }
  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={() => gotnavigate()}>Click me</button>
    </div>
  )
}

export default Home
