import React from 'react'
import Hook from './Hook'

const Main = () => {

    let [Data] = Hook("https://jsonplaceholder.typicode.com/posts");
    let [Aata] = Hook("https://jsonplaceholder.typicode.com/todos")
    return (
        <div className='mx-5'>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data && Data.map((el) => {
                            return (

                                <tr key={el.id}>
                                    <td className='border-2 border-black'>{el.id}</td>
                                    <td className='border-2 border-black'>{el.title}</td>
                                    <td className='border-2 border-black'>{el.body}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Complate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Aata && Aata.map((el) => {
                            return (

                                <tr key={el.id}>
                                    <td className='border-2 border-black'>{el.id}</td>
                                    <td className='border-2 border-black'>{el.title}</td>
                                    <td className='border-2 border-black'>{el.complate===true?"Yes":"No"}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main
