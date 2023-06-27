import React, { useState } from 'react'
import Rowadd from './Row_add'
import Data from "./Data.json"


const Main_ui = () => {
    let [Data1, setData1] = useState(Data);
    function Delete(id1) {

        setData1(Data1.filter((ele) => { return (ele.id !== id1) }));
        // alert("Delete 1 product") ;

    }
    function Create() {
        setData1(Data)
    }
    return (
        <div className='container flex justify-center'>
        <div>
        <div className='text-center text-4xl font-bold'>Aryan's UI</div>
                <div className="bg-white rounded-md">

                    <h2 className="text-black font-bold text-3xl">Products</h2>
                    <div className="flex items-center justify-between">
                        <input className="bg-gray-50 outline-none ml-1 block border-2 p-2 pr-8 rounded-lg m-3" type="text" name="" id="" placeholder="Search..." />
                        <div className="">
                            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-bold tracking-wide cursor-pointer" onClick={Create}>
                                Create
                            </button>
                        </div>
                    </div>
                    {Data1[0] && <div>
                        <div className="-mx-4 px-4 py-4">

                            <table className="">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-bold text-black uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-bold text-black uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-bold text-black uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-bold text-black uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-bold text-black uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Data1.map((el) => {
                                        return (

                                            <Rowadd Name={el.Name} Email={el.Email} Location={el.Location} Phone={el.Phone} Delete={() => { return Delete(el.id) }}></Rowadd>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Main_ui
