import React from 'react'
import About from './About'

const Contact = (Props) => {
  return (
    <div>
    <div>Contact: {Props.count}</div>
    <About count={Props.count}></About>
    </div>
    )
}

export default Contact
