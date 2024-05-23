import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context/shop-context'
import './Product.css'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
         <div className="product-card" >
            <div className='card'>
              <ProductConsumer>
                {(value) => (
                    <div className="img-container p-5"
                    onClick={()=>{
                      value.handleDetail(id);
                    }}
                    >
                      <Link to='/details'>
                      <img src={img} alt="products" className=' card-img-top' />
                      </Link>
                      <button className=' cart-btn  bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out md:py-3 md:px-6 lg:py-4 lg:px-8' 
                      disabled={inCart ? true : false} onClick={() =>{
                        value.addToCart(id);
                        value.openModal(id);
                        
                      }} >
                      { inCart ? (
                        <p className='text-capitalize mb-0' disabled>
                          {''} in Cart
                        </p>
                      ) : (
                        <p>cart me </p>
                      )}
                    </button>
                    </div>
                )}
              
              </ProductConsumer>
              {/* card footer */}
              <div className="card-footer">
                  <p className=' align-baseline mb-0'>
                    {title}
                  </p>
                  <h5 className=' text-black font-bold mb-0'>
                    <span className='mr-1'>₹</span>
                    {price}
                  </h5>
              </div>
            </div>
      
          </div>
    )
  }
}

Product.propTypes ={
  product:PropTypes.shape({
    id:PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
