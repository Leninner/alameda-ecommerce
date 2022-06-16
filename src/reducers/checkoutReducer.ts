/**
 * En este reducer se debe controlar toda la información del usuario, así como la información de la compra.
 */

const initialState = {
  userInfo: {
    name: '',
    email: '',
  },
}

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
