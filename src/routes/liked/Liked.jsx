import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';


const Liked = () => {
  const {liked} = useContext(GlobalContext);
  const {removeFromLiked} = useContext(GlobalContext);
  console.log(liked)
  return (
    <div>
      
    </div>
  )
}

export default Liked