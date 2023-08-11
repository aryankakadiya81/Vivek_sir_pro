import React, { useState, useMemo } from 'react';


const Main_Usememo = () => {
    let [Count, setCount] = useState(0);
    let [Item, setItem] = useState(0);

    let multiCount = useMemo(()=>{

            console.log("count updation");
            
        
    },[Count])

    let multiItem = useMemo(()=>{
        console.log("item updation");
    },[Item])
    return (
        <>
            <div>Count:{Count}</div>
            <div>Item:{Item}</div>
            

            <div className='flex'>
                <button onClick={() => { setCount(Count + 1) }}>Count</button>
                <button className='ml-10' onClick={() => { setItem(Item + 2) }}>Item</button>
            </div>



        </>
    )

}

export default Main_Usememo
