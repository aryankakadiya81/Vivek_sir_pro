import axios from 'axios';
import React, { useState } from 'react'

const Post = () => {

    let DATA = { uid: "", pwd: "" };
    let [InputData,setInputData]=useState(DATA);
    let hadleData = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        setInputData({...InputData,[e.target.name]:e.target.value})

        
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/todos',InputData)
        .then((res)=>{
            console.log("data",res);
        })
    }
    return (
        <>

            <div>

                <>
                    {/* component */}
                    {/* This is an example component */}
                    <div className="bg-white h-screen w-screen flex justify-center items-center">
                        <div className="px-6 py-3 rounded border w-64">
                            <div className="flex flex-col items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWuidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                <h2 className="text-2xl font-bold">Login</h2>
                            </div>
                            <form action="#" method="POST">
                                {/* username */}
                                <div className="flex flex-col my-2">
                                    <label className="text-xs text-gray-400">Username</label>
                                    <input
                                        className="border rounded px-3 py-1 mt-2"
                                        type="text"
                                        name='uid'
                                        value={InputData.uid}
                                        onChange={hadleData}
                                    />
                                </div>
                                <div className="flex flex-col my-2">
                                    <label className="text-xs text-gray-400">Password</label>
                                    <input
                                        className="border rounded px-3 py-1 mt-2"
                                        type="password"
                                        name='pwd'
                                        value={InputData.pwd}
                                        onChange={hadleData}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center my-3">
                                    <button className="my-3 py-1 w-full rounded bg-blue-600 text-blue-200" onClick={handleSubmit}>
                                        Submit
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </>


            </div>

        </>
    )
}

export default Post
