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
    let [sName, setsName] = useState(Name);
    let [sEmail, setsEmail] = useState(Email);
    let [sLocation, setsLocation] = useState(Location);
    let [sPhone, setsPhone] = useState(Phone);

    function Fsubmit() {
        setsName(sName)
        setsEmail(sEmail)
        setsLocation(sLocation)
        setsPhone(sPhone)
    }

    function Delete(id1) {

        setData1(Data1.filter((ele) => { return (ele.id !== id1) }));
        // alert("Delete 1 product") ;

    }
    function Edit(id1) {

        setData1(Data1.filter((ele) => {
            if (ele.id === id1) {

                ele.Name = Name;
                ele.Email = Email;
                ele.Phone = Phone;
                ele.Location = Location;

            }
            return 1;
        }))
    }
    function Create() {
        setData1(Data)
    }
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">

                    <div className="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="Name" type="text" placeholder="Name" value={Name} onChange={Fname} />
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


                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={Fsubmit}>Submit</button>
                    </div>
                </div>
            </div>





            <div className='container flex justify-center select-none mt-5'>
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
                                                <Rowadd Name={el.Name} Email={el.Email} Location={el.Location} Phone={el.Phone} Delete={() => { return Delete(el.id) }} Edit={() => { return (Edit(el.id)) }}></Rowadd>
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
        </>
    )
}

export default Main_ui
