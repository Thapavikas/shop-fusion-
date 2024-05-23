import React from 'react'
import Title from '../pages/Title'
import CartColumns from '../cart/CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context/shop-context'
import CartList from './CartList'
import CartTotal from './CartTotal'

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {value =>{
          const {cart} =value;
          if(cart.length>0){
            return (
              <div>
                <Title name='Your' title='Cart' />
                <CartColumns/>
                <CartList value ={value}/> 
                <CartTotal value={value}/>
              </div>
            );
          }
          else {
            return <EmptyCart/>;
          }
        }}
      </ProductConsumer>

      
    </section>
  )
}

export default Cart