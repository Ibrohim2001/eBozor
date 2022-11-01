import React from 'react';
import './home.css';
import { useToggle } from '../../hooks/useToggle';
import SliderContainer from '../../components/banner/SliderContainer';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <div>
      <SliderContainer/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home