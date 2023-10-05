import React, { useEffect, useState } from 'react'
// import  from 'axios'
import axios from 'axios'

const Get = () => {

    let [Data, setData] = useState([]);
    let [Data1, setData1] = useState([]);

    useEffect(() => {
       let abc =  axios.get('https://jsonplaceholder.typicode.com/todos');
       let pqr = axios.get('http://localhost:3003/products')
            .then((abc,pqr) => {
                setData(abc.data);
                setData1(pqr.data);
            })
            .catch((er) => {
                console.log(er);
            })
    }, [0])
    console.log(Data)
    return (
        <div>
            {Data.map((el) => {
                return (
                    <>
                        <div className='flex'>
                            <div className='mx-5'>{el.id}</div>
                            <div className='mx-5'>{el.title}</div>
                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default Get
