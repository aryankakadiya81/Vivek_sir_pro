import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADDTOCART, REMOVETOCART, EMPTYCART, EDITDATA } from './Number/Action';


const Container = () => {
    let Data = useSelector(state => state.Reducer);
    let Dispatch = useDispatch();


    let [Id, setId] = useState(Number);
    function Ids(e) {
        setId(e.target.value)
    }

    let [Name, setName] = useState("");
    function Names(e) {
        setName(e.target.value)
    }

    let [Age, setAge] = useState(Number);
    function Ages(e) {
        setAge(e.target.value)
    }

    let [SData, setSData] = useState({})

    function SetData() {
        setSData({
            "id": Id,
            "Name": Name,
            "Age": Age
        })

    }
    return (
        <>
            <div>
                <div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Id" value={Id} onChange={Ids} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name" value={Name} onChange={Names} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Age" value={Age} onChange={Ages} />
                    </div>
                    <div><button onClick={() => { SetData() }}>Set</button></div>

                </div>
                <div className='text-xl'>
                    <div className='flex justify-between mx-96 my-10'>



                        <div><button onClick={() => {Dispatch(ADDTOCART(SData)) }}>ADD_TO_CART</button></div>


                        <button onClick={() => { Dispatch(EMPTYCART(SData)) }}>Empty_CART</button>
                    </div>
                    <div className='flex justify-center my-10 font-extrabold'>{Data.length}</div>
                    <div className='flex-wrap flex'>
                        {
                            Data.map((ele) => {
                                return (
                                    <>
                                        <div key={ele.Age} className='mx-24 my-6'>
                                            <div>{ele.id}</div>
                                            <div>{ele.Name}</div>
                                            <div>{ele.Age}</div>
                                            <button onClick={() => { Dispatch(REMOVETOCART(ele.id, SData)) }}>REMOVE_TO_CART</button>
                                            <br />
                                             
                                            <button onClick={() => { Dispatch(EDITDATA(Id,Name,Age,SData)) }}>Edit</button>
                                            <br />
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Container
