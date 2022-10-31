import React, { useContext } from 'react';
import './cart.css';
import { GlobalContext } from '../../context/GlobalState';

const Cart = () => {
  const {cart} = useContext(GlobalContext);
  const {removeFromCart} = useContext(GlobalContext);

  

  return (
    <div className='cart'>
      <div className="cart_heading">
        <h2 className="cart_title">Welcome To Checkout Page</h2>
        <h4>You have {cart.length === null ? (<span>'0'</span>) : (<span>{cart.length}</span>)} products in your cart</h4>
      </div>
      <div className={cart?.length ? "cart_container" : 'cart_conatiner empty'}>
        {cart?.length ? 
          cart?.map((item, index) => (
            <div key={index} className="cart_item">
              <div className="cart_img">
                <img src={item.image} alt="" />
              </div>
              <div className="cart_info">
                <p className="cart_price">${item.price}</p>
                <p className="cart_description">${item.description.slice(0, 100)}...</p>
              </div>
              <div className="cart_footer">
                <button className="remove_cart" onClick={() => removeFromCart(item.id)}>Remove from cart</button>
              </div>
            </div>
          )) : <h2 className='empty_basket'>You don't have any items here</h2>
        }
      </div>
    </div>
  )
}

export default Cart