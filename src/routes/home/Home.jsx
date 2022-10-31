import React from 'react';
import './home.css';
import { useToggle } from '../../useToggle';
import SliderContainer from '../../components/banner/SliderContainer';
import Products from '../../components/products/Products';

const Home = () => {

  return (
    <div>
      <SliderContainer/>
      <Products/>
    </div>
  )
}

export default Home