import React, { useState, useContext } from 'react';
import './productcard.css'
import { GlobalContext } from '../../context/GlobalState';
import { useGetProducts } from '../../hooks/useGetProducts';


const ProductCard = ({product}) => {
  const {products, loading} = useGetProducts('https://fakestoreapi.com/products');
  const { addToCart } = useContext(GlobalContext);

  // const product = products.map(product => product)

  const handleCart = () => {
    addToCart(product);
    console.log(product)
  }

  return (
      <div className='product_card' key={product.id}>
        <div className="product_card_img">
          <img src={product.image} alt="" />
        </div>
        <div className="product_card_body">
          <p className="price">${product.price}</p>
          <p className="product_info">{product.description.slice(0, 60)}...</p>
        </div>
        <div className="product_card_footer">
          <button className='add_cart' onClick={handleCart}>Add To Cart</button>
        </div>
      </div>
  )
}

export default ProductCard