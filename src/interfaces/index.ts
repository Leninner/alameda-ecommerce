export interface productInterface {
  id: number
  name: string
  price: number
  image: string
  images: string[]
}

export type Inputs = {
  name: string
  lastName: string
  email: string
  message: string
  asunto: string
}

export interface stateInterface {
  cart: productInterface[]
  shopList: {
    filteredProducts: productInterface[]
  }
}

export interface CardProductProps {
  product: productInterface
  currentProductIndex?: number
  isMaybe?: boolean
}
