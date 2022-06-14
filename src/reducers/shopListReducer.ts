import products from '../data/productsData'

const initialState = {
  filteredProducts: products,
}

export const shopListReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SEARCH_BY_CATEGORY':
      const filteredKeywords = {
        all: () => products,
        offer: () => products.filter(product => product.isInOffer),
        pants: () => products.filter(product => product.category === 'pants'),
        topCloths: () =>
          products.filter(product => product.category === 'topCloths'),
      }

      return {
        ...state,
        filteredProducts: filteredKeywords[payload](),
      }

    case 'UPDATE_STOCK':
      const { product, quantity, size } = payload
      const newProducts = [...state.filteredProducts]
      const productIndex = newProducts.findIndex(p => p.id === product.id)

      /**
       * Si la cantidad es negativa, entonces el stock se incrementa
       *
       * Si la cantidad es positiva, entonces el stock se decrementa
       */

      newProducts[productIndex].tallas[size].stock -= quantity

      return {
        ...state,
        filteredProducts: newProducts,
      }

    default:
      return state
  }
}
