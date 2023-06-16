import React from 'react'
import Aryan from './PrintFilterData'
import { useState } from 'react'
import Fakejson from './FilterFakejson.json';


const FilterData = () => {

    let [form, setform] = useState("");
    let [form1, setform1] = useState("");


    function Logical_Love() {
        setform("Logical")
        setform1("Love")
    }
    function Logical_Drama() {
        setform("Logical")
        setform1("Drama")
    }
    function Logical_Fraud() {
        setform("Logical")
        setform1("Fraud")
    }
    function Love_Drama() {
        setform("Love")
        setform1("Drama")
    }
    function Love_Fraud() {
        setform("Love")
        setform1("Fraud")
    }




    return (
        <>
            <div>
                <div className='d-flex'>
                    <div className='w-25'>
                        <button type="button" className="btn btn-primary" onClick={Logical_Love}>Logical & Love</button><br />
                        <button type="button" className="btn btn-primary" onClick={Logical_Drama}>Logical & Drama</button><br />
                        <button type="button" className="btn btn-primary" onClick={Logical_Fraud}>Logical & Fraud</button><br />
                        <button type="button" className="btn btn-primary" onClick={Love_Drama}>Love & Drama</button><br />
                        <button type="button" className="btn btn-primary" onClick={Love_Fraud}>Love & Fraud</button><br />
                        <br />
                    </div>
                    <div className='w-75'>
                        <div className=''>
                            <div className='fs-1 fw-bold text-center'>{form}</div>
                            {form && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>

                        <div className=''>
                            <div className='fs-1 fw-bold text-center'>{form1}</div>

                            {form1 && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form1 == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form1} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterData
