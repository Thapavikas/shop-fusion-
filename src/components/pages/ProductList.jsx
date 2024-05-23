import React from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../../context/shop-context'


const ProductList = () => {
    
  return (
    <>
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

