// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTOCART, REMOVETOCART, EMPTYCART } from './Number/Action';
import { PRODUCTLIST } from './Product/Action';
// import Saga from './Product/Saga';


const Container = () => {
    let Data = useSelector(state => state.Reducer);
    let Data1 = useSelector(state => state); 

    let Dispatch = useDispatch();

    // const result = useSelector((state => state.Reducer1))
    console.log("redux data in ", Data1);

    let Semple = {
        "id": 1,
        "Name": "Aryan",
        "Age": 19,
        "Group": "Patel"
    }
    return (
        <>
            <div className='text-xl'>
                <div className='flex justify-between mx-96 my-10'>

                    <button onClick={() => { Dispatch(ADDTOCART(Semple)) }}>ADD_TO_CART</button>


                    <button onClick={() => { Dispatch(REMOVETOCART(Semple)) }}>REMOVE_TO_CART</button>
                    <button onClick={() => { Dispatch(EMPTYCART(Semple)) }}>Empty_CART</button>
                    <button onClick={() => { Dispatch(PRODUCTLIST(Data1)) }}>Get Product List</button>
                </div>
                <div className='flex justify-center my-10 font-extrabold'>{Data.length}</div>
                <div className='flex-wrap flex'>

                    {
                        Data.map((ele) => {
                            return (
                                <>
                                    <div key={ele.Age} className='mx-24'>
                                        <div>{ele.Name}</div>
                                        <div>{ele.Age}</div>
                                        <div>{ele.Group}</div>
                                        <br />
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Container
