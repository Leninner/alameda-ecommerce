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
      const { product } = payload
      const newProducts = [...state.filteredProducts]
      const productIndex = newProducts.findIndex(p => p.id === product.id)
      newProducts[productIndex] = product

      return {
        ...state,
        filteredProducts: newProducts,
      }

    default:
      return state
  }
}
