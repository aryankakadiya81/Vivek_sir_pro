import React, { useState } from 'react'
import Rowadd from './Row_add'
import Data from "./Data.json"


const Main_ui = () => {

    let [Data1, setData1] = useState(Data);


    let [Name, setName] = useState("");
    function Fname(e) {
        setName(e.target.value)
    }


    let [Email, setEmail] = useState("")
    function Femail(e) {
        setEmail(e.target.value)
    }

    let [Location, setLocation] = useState("")
    function Flocation(e) {
        setLocation(e.target.value)
    }

    let [Phone, setPhone] = useState("")
    function Fphone(e) {
        setPhone(e.target.value)

    }



    function Delete(id1) {

        setData1(Data1.filter((ele) => { return (ele.Email !== id1) }));

    }
    function Edit(id1) {

        setData1(Data1.filter((ele) => {
            if (ele.Name === id1) {

                ele.Name = Name;
                ele.Email = Email;
                ele.Phone = Phone;
                ele.Location = Location;

            }
            return true;
        }))
    }


    function Create() {
        setData1([{
            "Name": `${Name}`,
            "Email": `${Email}`,
            "Location": `${Location}`,
            "Phone": Phone
        }, ...Data1]);
    };


    let [Search, setSearch] = useState("")
    let [Search1, setSearch1] = useState("")

    function Filter(e) {
        setSearch1(e.target.value)
    }
    function Searchbtn()
    {
        setSearch(Search1)
    }


    function Clearlist() {
        setData1([])
    }
    return (
        <>
            <div className="min-h-screen flex justify-center">
                <div className="relative py-3 sm:mx-auto">

                    <div className="relative px-4 py-10 bg-slate-300 shadow-2xl sm:rounded-3xl sm:p-20">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name" value={Name} onChange={Fname} />
                        </div>

                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Email"
                                type="email"
                                placeholder="Email"
                                value={Email}
                                onChange={Femail}
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Location"
                                type="text"
                                placeholder="Location"
                                value={Location}
                                onChange={Flocation}
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Phone"
                                type="tel"
                                placeholder="Phone"
                                value={Phone}
                                onChange={Fphone}
                            />
                        </div>
                    </div>
                </div>
            </div>





            <div className='container flex justify-center select-none'>
                <div className=''>
                    <div className="bg-white rounded-md">

                        <h2 className="text-black font-bold text-3xl">Products</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <input className="bg-gray-50 outline-none ml-1 block border-2 p-2 pr-8 rounded-lg m-3" type="text" placeholder="Search..." value={Search1} onChange={Filter} />
                                <button onClick={Searchbtn}>Search</button>
                            </div>
                            <div className="">
                                <button className="bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 border-2 px-4 py-2 rounded-md text-white font-bold" onClick={Create}>
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
                                    {
                                        Data1.filter((el) => { return (el.Name === Search) }).map((el) => {
                                            return (
                                                <Rowadd Name={el.Name} Email={el.Email} Location={el.Location} Phone={el.Phone} Delete={() => { return Delete(el.Email) }} Edit={() => { return (Edit(el.Name)) }}></Rowadd>
                                            )
                                        })
                                    }

                                        {Search1 === "" && Data1.map((el) => {
                                            return (
                                                <Rowadd Name={el.Name} Email={el.Email} Location={el.Location} Phone={el.Phone} Delete={() => { return Delete(el.Email) }} Edit={() => { return (Edit(el.Name)) }}></Rowadd>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        }
                    </div>
                    <button onClick={Clearlist} className='hover:bg-red-500 p-2 font-bold hover:text-white border-2 rounded-2xl bg-white text-red-500 border-red-500 hover:border-2'>Clearlist</button>
                </div>

            </div>
        </>
    )
}

export default Main_ui

                    // <button className='bg-red-700 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer ms-2' onClick={Clearlist}>Clear ALL</button>