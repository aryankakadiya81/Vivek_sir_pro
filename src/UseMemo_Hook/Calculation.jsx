import React, { useMemo, useState } from 'react'

const Calculation = () => {
    let [Inch, setInch] = useState(0);
    let [Inch2, setInch2] = useState(0);

    let [Mtr, setMtr] = useState(0);
    let [Mtr2, setMtr2] = useState(0);


    let Meter = useMemo(() => {
        console.log("mtr")
        return Mtr2 * 100;
    }, [Mtr2]);

    let Inches = useMemo(() => {
        console.log('inch');
        return Inch2 * 2.54;
    }, [Inch2]);

    function targetmeter(e) {
        setMtr(e.target.value);
    }

    function targetinch(e) {
        setInch(e.target.value);
    }
    return (
        <>
            <div>
                <div className='flex mt-10'>
                    <div className='text-2xl ms-3'>Meter : </div>
                    <input className='border-2 border-black py-2 mr-5 ml-2 px-2 text-xl' placeholder='Meter' onChange={targetmeter} value={Mtr} />
                    <div className='flex text-2xl'>
                        <div>{Meter}</div>
                        <div className='ml-1'>Cm</div>
                    </div>
                    <div><button className='border-2 border-black p-2 font-semibold mx-5' onClick={() => { setMtr2(Mtr) }}>Meter to Cm</button></div>
                </div>
                <div className='flex my-4'>
                    <div className='text-2xl ms-3'>Inch : </div>
                    <input className='border-2 border-black py-2 mr-5 ml-2 px-2 text-xl' placeholder='Inch' onChange={targetinch} value={Inch} />
                    <div className='flex text-2xl'>
                        <div>{Inches}</div>
                        <div className='ml-1'>Cm</div>
                    </div>
                    <div><button className='border-2 border-black p-2 font-semibold mx-5' onClick={() => { setInch2(Inch) }}>Inch to Cm</button></div>
                </div>
            </div>
        </>
    )
}

export default Calculation
