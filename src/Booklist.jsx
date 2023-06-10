import React from 'react';
import Book from './Book';

let Data = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.8GLwJZlzcFQTHtu-2V8n3AHaJP&pid=Api&P=0&h=180",
    Name: "Pappu(Rahul gandhi)",
    Email: "pappugandhi@gmail.com",
    Qualification: "LLB",
    Contect: "9987227644",
    Address: "Now at Jail"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.uzadj5yxxNBp34InZqp77wHaJh&pid=Api&P=0&h=180",
    Name: "Chaman lal",
    Email: "chaman@gmail.com",
    Qualification: "10th Pass",
    Contect: "9876543201",
    Address: "Bihar"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.mzgnWb1Th9fRhsSEiZb3FwHaHa&pid=Api&P=0&h=180",
    Name: "Laura French",
    Email: "laura@gmail.com",
    Qualification: "10th fail",
    Contect: "9988223344",
    Address: "Mumbai"
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.LrvdxHvtGgGtHToSdOjPmgAAAA&pid=Api&P=0&h=180",
    Name: "Wang zu",
    Email: "wangzu@gmail.com",
    Qualification: "BA",
    Contect: "9988227644",
    Address: "Mumbai"
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.QoadQAbmzn97mfdLZeRilgHaJe&pid=Api&P=0&h=180",
    Name: "Devendra Mishra",
    Email: "mishra@gmail.com",
    Qualification: "No",
    Contect: "9900227644",
    Address: "Haryana"
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.xSobOQfVEf8P15ogimy0QwHaHa&pid=Api&P=0&h=180",
    Name: "Unknown Person",
    Email: "???????",
    Qualification: "-",
    Contect: "-",
    Address: "-"
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.arajm6MOZLUHuSHYtvMWbQHaHa&pid=Api&P=0&h=180",
    Name: "Unknown Person",
    Email: "???????",
    Qualification: "-",
    Contect: "-",
    Address: "-"
  }
]

const Booklist = () => {

  return (
    <>
      {Data.map((el) => {

        return (
          <div className=''>
            <Book Img={el.img} Name={el.Name} Email={el.Email} Qualification={el.Qualification} Contect={el.Contect} Address={el.Address}/>
          </div>
        )
      })}
    </>
  )
}

export default Booklist;
