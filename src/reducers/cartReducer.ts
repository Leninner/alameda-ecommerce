const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', action.payload)
      return {
        ...state,
        cart: [...state.cart, action.payload.product],
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
      }
    default:
      return state
  }
}
