import React from 'react'
import Aryan from './Aryan'
// import { useState } from 'react'


const Search = () => {
    function Burger() {
        let abc = document.getElementById("Aryan");

        return (
            abc.innerHTML =

            `<h1 className='text-center fs-1'>Burger</h1>
                <div className='my-4 ms-5' style={{ paddingLeft: "350px" }}>
                        <div className="card" style={{ width: "30rem" }}>
                            //<img className="card-img-top" height={"300px"} width={"400px"} src="https://images3.alphacoders.com/939/939772.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text fw-bold">Step 1 := Standard Burger Patties</p>
                                    <p className="card-text fw-bold">Step 2 := Slider Burger Patties</p>
                                    <p className="card-text fw-bold">Step 3 := Stuffed Burger Patties</p>
                                    <p className="card-text fw-bold">Step 4 := Turkey Burger Patties</p>
                                    <p className="card-text fw-bold">Step 5 := Vegetable Burger Patties</p>
                                    <p className="card-text fw-bold">Now your Fooddish is ready to Eat</p>
    
                                </div>
                        </div>
                    </div>`

        )
    }
    function Pizza() {
        let abc = document.getElementById("Aryan");
        return (
            abc.innerHTML =
            `<div>
                    <h1 className='fs-1'>Pizza</h1>
                    <div className='my-4 ms-5' style={{ paddingLeft: "350px" }}>
                        <div className="card" style={{ width: "30rem" }}>
                                                        <div className="card-body">
                                <p className="card-text fw-bold">Step 1 := Take Pizza Base</p>
                                <p className="card-text fw-bold">Step 2 := Sprade mayonnaise on Base</p>
                                <p className="card-text fw-bold">Step 3 := Sprade Sauce on Base</p>
                                <p className="card-text fw-bold">Step 4 := Sprade Toppings on Base</p>
                                <p className="card-text fw-bold">Step 5 := Bake in Microwave for 5 mins</p>
                                <p className="card-text fw-bold">Now your Fooddish is ready to Eat</p>


                            </div>
                        </div>
                    </div>
                </div>`
        )

    }
    return (

        <>
            <Aryan Burger={Burger} Pizza={Pizza}></Aryan>

            </>
            )
        }
        
        
        
        
        export default Search
        
        // <div className='text-center fs-1'>Aryan</div>
        