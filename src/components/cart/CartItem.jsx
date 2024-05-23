import React from 'react'
import '../../../src/index.css'

const CartItem = ({item,value}) => {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
  return (
<div className="flex flex-col my-1 text-center">
  <div className='w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-center'>
    <div className='w-full lg:w-1/6 mb-4 lg:mb-0 '>
      <img src={img} alt='product' className="w-20 h-20 mx-auto" />
    </div>

    <div className='w-full lg:w-1/6 mb-4 lg:mb-0 lg:ml-12'>
      <span className='lg:hidden'>Product: </span>{title}
    </div>
    <div className='w-full lg:w-1/6 mb-4 lg:mb-0 lg:ml-9'>
      <span className='lg:hidden'>Price: ₹</span>{price}
    </div>
    <div className='w-full lg:w-1/6 mb-4 lg:mb-0 my-2 lg:my-0'>
      <div className='flex justify-center'>
        <div className='flex items-center'>
          <span onClick={() => decrement(id)} className='btn-black mx-1 cursor-pointer'>-</span>
          <span className='mx-1'>{count}</span>
          <span onClick={() => increment(id)} className='btn-black mx-1 cursor-pointer'>+</span>
        </div>
      </div>
    </div>

    <div className='w-full lg:w-1/6 mb-4 lg:mb-0'>
    <div 
  onClick={() => removeItem(id)} 
  className='
    bg-blue-500 hover:bg-blue-700 text-white font-bold 
    py-2 px-4 rounded 
    transition duration-300 ease-in-out 
    sm:py-2 sm:px-5 
    md:py-3 md:px-6
    lg:py-4 lg:px-8 
    cursor-pointer
  '
>
  Remove
</div>
    </div>
    <div className='w-full lg:w-1/6'>
      <strong>Items Total: ₹</strong>{total}
    </div>
  </div>
</div>


  )
}

export default CartItem