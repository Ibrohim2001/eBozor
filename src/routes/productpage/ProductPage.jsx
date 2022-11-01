import React, { useContext, useState } from 'react';
import './productpage.css';
import { useParams } from 'react-router-dom';  
import { useGetData } from '../../hooks/useGetData';
import { GlobalContext } from '../../context/GlobalState';

const ProductPage = () => {
  const {addToCart} = useContext(GlobalContext);
  const productId = useParams();
  const {data, loading} = useGetData(`https://fakestoreapi.com/products/${productId.id}`);
  return (
    <div className='product_page'>
      <div className="product_page_img">
        <img src={data.image} alt="" />
      </div>
      <div className="product_page_info">
        <h3 className="product_page_name">{data.title}</h3>
        <h4 className="product_page_price">${data.price}</h4>
        <p>About this product</p>
        <p className="product_page_desc">{data.description}</p>
        <p className="product_page_category">#{data.category}</p>
        <button className='add_to_cart' onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPage