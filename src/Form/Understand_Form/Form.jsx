import React, { useState } from 'react'
// import "./Form.css"

const Form = () => {



    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    function Fname(e) {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    function Femail(e) {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    function Fpassword(e) {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    function Fsubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="myform form ">
                            <form action="" method="post" name="login" onSubmit={Fsubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control my-input"
                                        id="name"
                                        placeholder="Name"
                                        onChange={Fname}
                                        value={name}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control my-input"
                                        id="email"
                                        placeholder="Email"
                                        onChange={Femail}
                                        value={email}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="phone"
                                        className="form-control my-input"
                                        placeholder="Password"
                                        onChange={Fpassword}
                                        value={password}
                                    />
                                </div>
                                <div>
                                    <button type="submit" className=" btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form
