import React from 'react'
import { ProductConsumer } from '../../context/shop-context'
import { Link } from 'react-router-dom';
const Detials = () => {
  return (
    <ProductConsumer>
      { value =>{
        const {id,company,info,price,title,inCart,img}= value.detailProduct;
        return(
          <div className="detail-container">
            <div className='row'>
              <div className=' col-span-10 mx-auto text-center text-black my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            <div>
              <div className=' col-span-10 mx-auto md:col-span-6 my-3'>
                <img src={img} alt="product" />
              </div>
              <div className=' col-span-10 mx-auto md:col-span-6 my-3 p-4'>
                <h1>Model:{title}</h1>
                <div className=' text-bold mt-3 mb-2 p-3'>
                Made by: <span className='textbold'>{company}</span>
                <h4 className='text-black'>
                  <strong>
                    Price: <span>₹</span>{price}
                  </strong>
                </h4>
                  <p className='text-bold mt-3 mb-0'>
                    Some info about 
                  </p>
                  <p className='text-black '>
                    {info}
                  </p>
                </div>
                <Link to='/'>
                  <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded
                 md:py-3 md:px-6
                 lg:py-4 lg:px-8
                 transition duration-300 ease-in-out
                 transform hover:bg-blue-700 hover:scale-105 hover:text-gray-100 hover:shadow-lg'>
                    Back to product
                  </button>
                  <button className=' m-3 bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out md:py-3 md:px-6 lg:py-4 lg:px-8' 
                 cart 
                 disabled={inCart?true:false}
                  onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default Detials