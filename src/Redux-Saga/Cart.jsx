// import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { CLEAR_CART } from './Store/Sample/Action';
import { REMOVE_FROM_CART, CLEAR_CART } from './Store/CartData/Action';

const Cart = () => {
  let Data = useSelector(Data => Data.CART_DATA);
  // let [Total, setTotal] = useState(0)

  let Prices = Data.map((el) => { return el.price }).reduce((p, n) => { return (p + n) }, 0);

  let Total = Data.map((el) => { return (Math.ceil((el.price) - ((el.discountPercentage * el.price) / 100))) }).reduce((p, n) => { return (p + n) }, 0);

  let Discount = Prices - Total;

  let Discount_Per = Discount ? ((Discount * 100) / Prices) : (0)
  let Dispatch = useDispatch()
  // console.log(Data);
  return (
    <div className='flex justify-between'>

      {
        Data.length !== 0 &&
        <table>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Final_Price</th>
            <th>Remove</th>



          </tr>


          {
            Data.map((el) => {
              let Disprice = Math.ceil((el.price) - ((el.discountPercentage * el.price) / 100))


              return (

                <tr>

                  <td className='px-5'>{el.id}</td>
                  <td className='px-5'><img src={el.thumbnail} width={"100px"}></img></td>
                  <td className='px-5'>{el.title}</td>
                  <td className='px-5'>$ {el.price}</td>
                  <td className='px-5'>{el.discountPercentage} %</td>
                  <td className='px-5'>$ {Disprice}</td>
                  <td className='px-5'><button onClick={() => Dispatch(REMOVE_FROM_CART(el.id))}>Remove</button></td>

                </tr>

              )
            })
          }
        </table>}


      {Prices > 0 && <div>
        <table>
          <tbody>
            <tr>
              <td className='border-2 border-black '>Total Ammount</td>
              <td className='border-2 border-black '>$ {Prices}</td>
            </tr>
            <tr>
              <td className='border-2 border-black '>Total Quantity</td>
              <td className='border-2 border-black '>{Data.length}</td>
            </tr>
            <tr>
              <td className='border-2 border-black '>Total Discount</td>
              <td className='border-2 border-black '>$ {Discount}</td>
            </tr>
            <tr>
              <td className='border-2 border-black '>Total Discount Percentage</td>
              <td className='border-2 border-black '>{Math.round(Discount_Per)} %</td>
            </tr>
            <tr>
              <td className='border-2 border-black '>Total Discounted Price</td>
              <td className='border-2 border-black '>$ {Total}</td>
            </tr>
          </tbody>
        </table>
        <div><button disabled={Data.length === 0} onClick={() => Dispatch(CLEAR_CART())}>CLEAR_CART</button></div>
      </div>}
    </div>
  )
}

export default Cart
