
import React from 'react';
import { ProductConsumer } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal, modalProduct } = value;
        if (!modalOpen) {
          return null;
        } else {
          const { img, title, price } = modalProduct;
          return (
            <div className="modal-container">
              <div className="row">
                <div id="modal" className="col-span-8 mx-auto md:col-span-6 lg:col-span-4 text-center">
                  <h5>Item added to the cart</h5>
                  <img src={img} alt="product" className="img-fluid" />
                  <h5>{title}</h5>
                  <h5>Price: ₹ {price}</h5>
                  <Link to="/">
                    <button
                      onClick={closeModal}
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:text-gray-100 hover:shadow-lg"
                    >
                      Store
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      onClick={closeModal}
                      className="m-3 bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out md:py-3 md:px-6 lg:py-4 lg:px-8"
                    >
                      Go to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
