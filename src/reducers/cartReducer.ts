import { productInterface } from '../interfaces'

const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':
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

    case 'UPDATE_CART':
      const { product, quantity, size } = payload
      const newCart: productInterface[] = [...state.cart]
      const productIndex = newCart.findIndex(p => p.id === product.id)

      /**
       * Si la cantidad es negativa, entonces el stock se decrementa
       * y la cantidad se incrementa
       *
       * Si la cantidad es positiva, entonces el stock se incrementa
       * y la cantidad se decrementa
       */

      newCart[productIndex].tallas[size].stock += quantity
      newCart[productIndex].tallas[size].cantidad -= quantity

      return {
        ...state,
        cart: newCart,
      }

    case 'REMOVE_FROM_CART':
      const { product: currentProduct, size: currentSize } = payload
      const updatedCart: productInterface[] = JSON.parse(
        JSON.stringify(state.cart)
      )

      const productIndex2 = updatedCart.findIndex(
        p => p.id === currentProduct.id
      )

      updatedCart[productIndex2].tallas[currentSize].stock +=
        updatedCart[productIndex2].tallas[currentSize].cantidad

      updatedCart[productIndex2].tallas[currentSize].cantidad = 0

      if (
        updatedCart.every(p =>
          Object.entries(p.tallas).every(([_, { cantidad }]) => cantidad === 0)
        )
      ) {
        const newUpdatedCart: productInterface[] = updatedCart.filter(
          p => p.id !== currentProduct.id
        )
        console.log('El producto se elimino del carrito')

        return {
          ...state,
          cart: newUpdatedCart,
        }
      }

      return {
        ...state,
        cart: updatedCart,
      }

    default:
      return state
  }
}

const isAlreadyInCart = (cart: productInterface[], product: productInterface) =>
  cart.find(item => item.id === product.id)
