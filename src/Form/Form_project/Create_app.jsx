import React from 'react'
import Edate from './Edate'

const Create = (props) => {
  let { Fname, Lname, Email, Bdate, Mnumber, Password } = props
  return (
    <>
      <tr>
        <td>{Fname}</td>  
        <td>{Lname}</td>  
        <td>{Email}</td>  
        <Edate Date={Bdate}></Edate>  
        <td>{Mnumber}</td>  
        <td>{Password}</td> 
      </tr>
    </>
  )
}

export default Create
