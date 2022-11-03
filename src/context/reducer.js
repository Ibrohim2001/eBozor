function reducer(state, action) {
  switch(action.type) {
    case "ADD_TO_CART" :
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "REMOVE_FROM_CART" : 
      state.cart.splice(action.payload, 1);
      return {
        cart: state.cart
      }
    case "EMPTY_CART" :
      return {
        cart: []
      }
    case "ADD_TO_FAVOURITES" :
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
    case "REMOVE_FROM_LIKED" :
      state.liked.splice(action.payload, 1);
      return {
        liked: state.liked
      }
    default: 
    return state
  }
}

export default reducer