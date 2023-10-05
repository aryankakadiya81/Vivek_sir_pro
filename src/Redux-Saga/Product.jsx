import React, { useEffect, useState } from 'react';
// import { ADD_TO_CART, REMOVE_FROM_CART } from './Store/Sample/Action';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_PRODUCT, GET_PRODUCT ,SEARCH_PRODUCT} from './Store/Product/Action'
import { ADD_TO_CART } from './Store/CartData/Action';


const Product = () => {


  // let [data,setData] = useState(0); 

  let MAINDATA = useSelector(DATA => DATA)
  // console.log(MAINDATA)
  // let MAINDATA = useSelector(DATA => DATA.CART_DATA)
  // let Products = useSelector(DATA => DATA.PRODUCT_DATA)

  let Dispatch = useDispatch();

  useEffect(()=>{
    Dispatch(GET_PRODUCT());
  },[])
 
  // let Product = {
  //   name: "Iphone",
  //   id: 1
  // }
  return (
    <div className='bg-slate-500 text-slate-300'>

      <div>
        <div><button onClick={() => { Dispatch(CLEAR_PRODUCT()) }}>CLEAR_Product</button></div>
        <div>
          <input type='text' onChange={(e)=>Dispatch(SEARCH_PRODUCT(e.target.value))}/>
          <button className='border-2 px-2 ml-2 bg-black'>Search</button>
        </div>

      </div>





      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              MAINDATA.PRODUCT_DATA.length !== 0 && MAINDATA.PRODUCT_DATA.map((el) => {

                // console.log("el++++",el.images.map()
                // var image=Object.keys(el.images);
                // console.log("image++",typeof(image))
                return (
                  <>
                    <div className="p-4 md:w-1/4">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={el.thumbnail}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {el.category}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {el.title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {el.description}
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button onClick={() => { Dispatch(ADD_TO_CART(el)) }} className='p-2 bg-black text-white'>ADD TO CART</button>
                          </div>
                        </div>
                      </div>
                    </div>


                  </>
                )
              })
            }

          </div>
        </div>
      </section>
    </div>


  )
}

export default Product


// <div>
//           {
//             // MAINDATA.CART_DATA.map((ele) => {
//             //   return (
//             //     <>
//             //       <div>{ele.name}</div>
//             //       <div><button onClick={() => { Dispatch(REMOVE_FROM_CART(Product, Product.id)) }}>Btn</button></div>
//             //     </>
//             //   )
//             // })
//           }
//         </div>