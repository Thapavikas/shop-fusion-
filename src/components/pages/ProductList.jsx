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
      <img className="w-full h-[550px]" src={Main} alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className= " text-amber-600 font-semibold text-3xl mb-4 ml-96">Welcome to our store!</h1>
        <h1 className="text-amber-800 text-3xl mb-4 ml-96">Quality Products at Unbeatable Prices</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-96"
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

