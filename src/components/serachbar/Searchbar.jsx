import React, { useState } from 'react';
import './searchbar.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';

const Searchbar = () => {
  const [item, setItem] = useState("");

  return (
    <div className='searchbar border_gradient'>
      <button className='dropdown_btn'>
        <span>All</span>
        <BsChevronDown/>
      </button>
      <input 
        type="text" 
        placeholder='Search here'
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        className='searchbar_input'
      />
      <button className='search_btn'><BsSearch/></button>
    </div>
  )
}

export default Searchbar