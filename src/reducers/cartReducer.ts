const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
      }
    default:
      return state
  }
}
