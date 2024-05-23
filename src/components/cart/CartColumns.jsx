import React from 'react'

const CartColumns = () => {
  return (
<div className='container-fluid flex flex-col'>
  <div className="row flex flex-wrap">
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Products</p>
    </div>
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Name of Product</p>
    </div>
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Price: ₹</p>
    </div>
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Quantity</p>
    </div>
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Remove</p>
    </div>
    <div className='col-span-10 mx-auto lg:col-span-2 hidden md:block'>
      <p className="block">Total:₹</p>
    </div>
  </div>
</div>

  )
}

export default CartColumns