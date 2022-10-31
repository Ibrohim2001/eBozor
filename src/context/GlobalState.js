import React, { createContext, useReducer} from "react";
import reducer from "./reducer";
// export const GlobalContext = createContext();

const initialState = {
  cart: [],
  liked: []
}

export const GlobalContext = createContext(initialState)

export const GlobalState = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(cart) {
    dispatch({
      type: "ADD_TO_CART",
      payload: cart
    });
  }
  function addToLiked(liked) {
    dispatch({
      type: "ADD_TO_LIKED",
      payload: liked
    });
  }
  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  }
  function removeFromLiked(id) {
    dispatch({
      type: "REMOVE_FROM_LIKED",
      payload: id
    });
  }

  return (<GlobalContext.Provider value={{
    cart: state.cart,
    liked: state.liked,
    addToCart,
    removeFromCart,
    addToLiked,
    removeFromLiked
  }}>
    {children}
  </GlobalContext.Provider>)

}

// export const useStateValue = () => useContext(GlobalContext)