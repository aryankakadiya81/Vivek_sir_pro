// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.
// The useMemo and useCallback Hooks are similar.
// The React useMemo Hook returns a memoized value.

import React, { useMemo, useState } from 'react'

const Explain = () => {
    let [Count, setCount] = useState(0);
    let [Count1, setCount1] = useState(0);


    let Even = useMemo(()=>{
        console.log("Even");
    },[Count]);

    let Odd = useMemo(()=>{
        console.log("Odd");
    },[Count1]);


    // let Even = ()=>{
    //     console.log("Even");
    // };

    // let Odd = ()=>{
    //     console.log("Odd");
    // };

    // <div>{Even()}{Odd()}</div>

    return (
        <>
            <div>
                <div className='flex justify-around'>
                    <div>Even:{Count}</div>
                    <div>Odd:{Count1}</div>
                    </div>
                    <div className='flex justify-center'>{Count} + {Count1} = {Count+Count1}</div>
                <div className='flex justify-around'>
                <button onClick={()=>{setCount(Count+2)}}>Even+</button>
                <button onClick={()=>{setCount1(Count1+1)}}>Odd+</button>

                </div>

            </div>
        </>
    )
}

export default Explain
