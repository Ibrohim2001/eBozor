import React, { createContext, useReducer} from "react";
import reducer from "./reducer";
// export const GlobalContext = createContext();

const initialState = {
  cart: [],
  favourites: []
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
  function addToFavourites(favourites) {
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: favourites
    });
  }
  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  }
  function removeFromFavourites(id) {
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: id
    });
  }

  return (<GlobalContext.Provider value={{
    cart: state.cart,
    liked: state.liked,
    addToCart,
    removeFromCart,
    addToFavourites,
    removeFromFavourites
  }}>
    {children}
  </GlobalContext.Provider>)

}

// export const useStateValue = () => useContext(GlobalContext)