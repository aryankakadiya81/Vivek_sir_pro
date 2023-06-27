import React, { useState } from 'react';
import Create from './Create_app';

const Form2 = () => {

    let array = [
        {
            fname: "Aryan",
            lname: "Kakadiya",
            email: "Example@gmail.com",
            bdate: new Date(2004,3,19),
            mnumber: 9934567788,
            password: "aaaaa@11111"
        },
        {
            fname: "Darshan",
            lname: "Pansuriya",
            email: "Example@gmail.com",
            bdate: new Date(2006,4,10),
            mnumber: 9938867788,
            password: "dddddd@11111"
        },
        {
            fname: "Jinal",
            lname: "Chodvadiya",
            email: "Example@gmail.com",
            bdate: new Date(2002,8,22),
            mnumber: 9930987788,
            password: "jjjjjj@11111"
        }
    ]

    let [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        bdate: "",
        mnumber: "",
        password: ""
    })

    function HandleI(e) {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }


    function Fsubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='d-flex justify-center'>
            <div className="container mt-5 py-5 bg-black border rounded-5 col-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="myform form">
                            <form action="" method="post" name="login" onSubmit={Fsubmit}>
                                <div className="form-group">
                                    <input type="text" name="fname" className="form-control my-input" placeholder="First Name" onChange={HandleI} value={form.fname} />
                                </div>
                                <div className="form-group mt-4">
                                    <input type="text" name="lname" className="form-control my-input" placeholder="Last Name" onChange={HandleI} value={form.lname} />
                                </div>
                                <div className="form-group mt-4">
                                    <input type="tel" name="mnumber" className="form-control my-input" placeholder="Mobile Number" onChange={HandleI} value={form.mnumber} />
                                </div>
                                <div className="form-group mt-4">
                                    <input type="email" name="email" className="form-control my-input" placeholder="Email" onChange={HandleI} value={form.email} />
                                </div>
                                <div className="form-group mt-4">
                                    <input type="date" name="bdate" className="form-control my-input" placeholder="Birth Date" onChange={HandleI} value={form.bdate} />
                                </div>
                                <div className="form-group mt-4">
                                    <input type="password" name="password" id="phone" className="form-control my-input" placeholder="Password" onChange={HandleI} value={form.password} />
                                </div>
                                <div className='mt-4 col-6 ms-5 ps-5'>
                                    <button type="submit" className=" btn btn-primary fw-bold col-12">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

           {array[0] && 
            <table className="table mt-5">
                <thead className="table-light fw-bold fs-4">
                    <tr>
                        <td>Name</td>
                        <td>Surname</td>                    
                        <td>Email</td>                    
                        <td>Birth Date</td>                    
                        <td>Mobile</td>                    
                        <td>Password</td>                    
                    </tr>
                </thead>
                <tbody>
                    
                {
                    array.map((el) => {
                        return (
                            <Create Fname={el.fname} Lname={el.lname} Email={el.email} Bdate={el.bdate} Mnumber={el.mnumber} Password={el.password}></Create>
                        )
                    })
                }
                </tbody>
            </table>}

        </div>
    )
}

export default Form2

// let arr = [
//     {
//         fname: "Aryan",
//         lname: "Kakadiya",
//         email: "abc@gmail.com",
//         bdate: "19-04-2004",
//         mnumber: 9925614381,
//         password: "abc@123"
//     }
// ]