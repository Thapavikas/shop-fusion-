import React, { useRef } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../../context/shop-context'
import Main from '../../assets/main.jpg'


const ProductList = () => {
  const scrollRef = useRef(null);
  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
    
  return (
    <>
<div className="relative">
  <img className="w-full  md:h-[400px] sm:h-[300px]" src={Main} alt="" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h1 className="text-amber-600 font-semibold mb-4 md:text-2xl sm:text-xl md:mb-3 sm:mb-2 md:text-center sm:text-center ml-12 md:ml-0 sm:ml-0">
      Welcome to our store!
    </h1>
    <h1 className="text-amber-800  mb-4 md:text-2xl sm:text-xl md:mb-3 sm:mb-2 md:text-center sm:text-center ml-12  md:ml-0 sm:ml-0">
      Quality Products at Unbeatable Prices
    </h1>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-12 md:ml-0 sm:ml-0"
      onClick={scrollToSection}
    >
      Shop Now
    </button>
  </div>
  <div ref={scrollRef}></div>
</div>

    <div className=' py-5'>
        <div className="container">
            <Title name='Our' title='Products'  />
            <div className="row">
                <ProductConsumer>
                    {value => {
                     return value.products.map(product =>{
                        return <Product product={product} />;
                     })
                    }
                    }
                </ProductConsumer>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductList

