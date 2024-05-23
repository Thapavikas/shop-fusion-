import React from 'react';
import emptyCartImage from '../../../public/img/emptyCartImage.jpg';

const EmptyCart = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center mt-10 px-4">
        <img 
          src={emptyCartImage} 
          alt="Empty Cart" 
          className="w-1/2 md:w-1/4 lg:w-1/6 mb-6"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 text-center">
          Your Cart is currently Empty
        </h1>
      </div>
      <footer >

      </footer>
    </div>
  );
}

export default EmptyCart;

