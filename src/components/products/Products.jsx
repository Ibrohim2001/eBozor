import React, { sueState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import './products.css';
import { useGetProducts } from '../../hooks/useGetProducts';


const Products = () => {
  const {products, loading} = useGetProducts('https://fakestoreapi.com/products');

  // console.log(products)
  
  return (
    <div className='products'>
      <div className="products_top">
        <h1 className="products_title">All Products</h1>
        <Link to='/products' className='more_products'>See more</Link>
      </div>
      <div className="products_container">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products