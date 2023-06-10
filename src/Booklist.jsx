import React from 'react';
import Book from './Book'

const Booklist = () => {
  let Data = [
    {
        Name : "Aryan",
        Surname: "Kakadiya"
    }
]

  
  return (
    <div>
      <Book Name ={Data[0].Name} Surname={Data[0].Surname}/>

    </div>
  )
}

export default Booklist;
