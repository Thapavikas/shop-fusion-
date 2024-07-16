import React from 'react'
import {Link} from 'react-router-dom'

const CartTotal = ({value}) => {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
  return (
   <div>
    <div className="cart-tool">
        <div className="row">
            <div className=' col-span-10 mt-2 sm:ml-5 md:ml-auto sm:col-span-8 text-right'>
                <Link to='/'>
                    <button className=' mr-4  bg-red-500 hover:bg-red-700 text-white font-bold 
                        py-2 px-4 rounded 
                        transition duration-300 ease-in-out 
                        sm:py-2 sm:px-5 
                        md:py-3 md:px-6
                        lg:py-4 lg:px-8 
                        cursor-pointer' type='button' onClick={()=>{
                            clearCart()
                        }}>
                        Clear Cart 
                    </button>
                </Link>
                <div className='mr-4'>
                <h4>
                    <span  className='text-black'>
                    SubTotal : </span> <strong>₹ {cartSubTotal}</strong>
                </h4>
                <h4>
                    <span  className='text-black'>
                    Tax : </span> <strong>₹ {cartTax}</strong>
                </h4>
                <h4>
                    <span  className='text-black'>
                    Total : </span> <strong>₹ {cartTotal}</strong>
                </h4>
                </div>
                <button class=" mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 ease-in-out hover:scale-105">
                    Pay: <strong>₹ {cartTotal}</strong>
                </button>

            </div>
        </div>
    </div>
   </div>
  )
}

export default CartTotal