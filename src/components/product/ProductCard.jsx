import React, { useState, useContext } from 'react';
import './productcard.css'
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const { addToCart } = useContext(GlobalContext);
  const handleCart = () => {
    addToCart(product);
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
        </div>
      </div>
  )
}

export default ProductCard