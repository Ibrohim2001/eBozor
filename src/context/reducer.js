export default (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART" :
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "ADD_TO_LIKED" : 
      return {
        liked: [...state.liked, action.payload]
      }
    case "REMOVE_FROM_CART" : 
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    case "EMPTY_CART" :
      return {
        cart: []
      }
    case "REMOVE_FROM_LIKED" :
      state.liked.splice(action.id, 1);
      return {
        liked: state.liked
      }
    default: 
    return state
  }
}