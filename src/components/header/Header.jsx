import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsPerson, BsHeart, BsCart3 } from 'react-icons/bs';
import { useToggle } from '../../hooks/useToggle';
import Searchbar from '../serachbar/Searchbar';
import './header.css';
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
  const {currentLocation, setCurrentLocation} = useState(true);
  const location = useLocation();
  const {cart} = useContext(GlobalContext);
  const {liked} = useContext(GlobalContext);
  const [isVisible, toggle] = useToggle();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offSet = window.scrollY;
    if(offSet > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <header className={scroll ? 'header sticky' : 'header'}>
      <div className='header_content'>
      <Link to='/' className='header_logo'>eBozor</Link>
      <div className={isVisible ? "header_options menu_open" : "header_options"}>
        <Searchbar/>
        <ul className='nav_menu'>
          <li className='nav_item' onClick={toggle}>
            {
              location.pathname === '/login' ? 
                <Link to='/login'>
                  <BsPerson/>
                  <span>Login</span>
                </Link> 
                : 
                <Link to='/sign-up'>
                  <BsPerson/>
                  <span>Sign Up</span>
                </Link>
            }
          </li>
          <li className='nav_item' onClick={toggle}>
            <Link to='/liked'>
              <BsHeart/>
              <span>Liked</span>
              {/* <span className='nav_count'>{liked.length < 0 ? '0' : `${liked.length}`}</span> */}
            </Link>
          </li>
          <li className='nav_item' onClick={toggle}>
            <Link to='/check-out'>
              <BsCart3/>
              <span>Cart</span>
              <span className='nav_count'>
                {cart.length === null ? '0' : `${cart.length}`}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <button 
        className='menu_btn' 
        onClick={toggle}
      >
        {isVisible ? (<FaTimes/>) : (<FaBars/>)}
      </button>
      </div>
    </header>
  )
}

export default Header