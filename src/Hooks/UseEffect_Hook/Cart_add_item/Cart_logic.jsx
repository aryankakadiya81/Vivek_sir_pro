import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Cart_logic = () => {

    // let [count, setCount] = useState(0);
    let [Mobile, setMobile] = useState(0);
    let [Tv, setTv] = useState(0);
    let [Laptop, setLaptop] = useState(0);
let [Count, setCount] = useState(0);

    useEffect(() => {
        setCount(Mobile + Tv + Laptop);
    }, [Mobile,Tv,Laptop]);

    return (
        <div>
            <Navbar Count={Count} Mobile={Mobile} Tv={Tv} Laptop={Laptop}></Navbar>

            <div className='flex m-5'>
                <div>Phone</div>
                <button className='border-black border-2 p-1 mx-2' onClick={() => setMobile(Mobile + 1)}>Add to cart</button>
            </div>
            <div className='flex m-5'>
                <div>Laptop</div>
                <button className='border-black border-2 p-1 mx-2' onClick={() => setLaptop(Laptop + 1)}>Add to cart</button>
            </div>
            <div className='flex m-5'>
                <div>Tv</div>
                <button className='border-black border-2 p-1 mx-2' onClick={() => setTv(Tv + 1)}>Add to cart</button>
            </div>
            <button className='border-black border-2 p-1 mx-2' onClick={() => {setCount(0); setLaptop(0); setTv(0); setMobile(0);}}>Clear</button>


        </div>
    )
}

export default Cart_logic
