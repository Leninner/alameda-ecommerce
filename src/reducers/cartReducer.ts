const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload)

      return {
        ...state,
        cart: [...state.cart, payload.product],
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
      }
    default:
      return state
  }
}
