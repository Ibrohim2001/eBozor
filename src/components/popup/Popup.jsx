import React from 'react';
import './popup.css';
import { BsPatchCheck } from 'react-icons/bs'

const Popup = () => {
  return (
    <div className='cart_popup'>
      <p className='popup_message'>Product added to the cart</p>
      <span className='done_icon'><BsPatchCheck/></span>
    </div>
  )
}

export default Popup