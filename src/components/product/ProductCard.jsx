import React, { useState, useContext } from 'react';
import './productcard.css';
import { GlobalContext } from '../../context/GlobalState';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';

const ProductCard = ({product}) => {
  const [isVisible, toggle] = useToggle();
  const { addToCart, addToLiked } = useContext(GlobalContext);
  const handleCart = () => {
    addToCart(product);
  }
  const handleLiked = () => {
    addToLiked(product)
  }
  return (
      <div className='product_card' key={product.id}>
        <div className="product_card_img">
          <img src={product.image} alt="" />
        </div>
        <div className="product_card_body">
          <p className="price">${product.price}</p>
          <Link to={`/products/${product.id}`} className="product_info">{product.description.slice(0, 60)}...</Link>
        </div>
        <div className="product_card_footer">
          <button className='add_cart' onClick={handleCart}>Add To Cart</button>
          <button 
            className='add_liked' 
            onClick={toggle}
          >
            {isVisible ? (<BsHeartFill/>) : (<BsHeart/>)}
          </button>
        </div>
      </div>
  )
}

export default ProductCard