import { productInterface } from '../interfaces'

const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload)
      console.log({ cart: state.cart })

      if (isAlreadyInCart(state.cart, payload.product)) {
        return {
          ...state,
          cart: state.cart.map((product: productInterface) => {
            if (product.id === payload.product.id) {
              return {
                ...product,
                tallas: {
                  ...product.tallas,
                  [payload.size]: {
                    ...product.tallas[payload.size],
                    cantidad:
                      product.tallas[payload.size].cantidad +
                      payload.product.tallas[payload.size].cantidad,
                    stock:
                      product.tallas[payload.size].stock -
                      payload.product.tallas[payload.size].cantidad,
                  },
                },
              }
            }

            return product
          }),
        }
      }

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

const isAlreadyInCart = (cart: productInterface[], product: productInterface) =>
  cart.find(item => item.id === product.id)
