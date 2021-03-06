export interface productInterface {
  id: number
  name: string
  images: string[]
  isInOffer: boolean
  offerPrice: number
  price: number
  description: string
  details: string[]
  tallas: Tallas
  category: string
}

export interface Tallas {
  S?: TallasInfo
  M?: TallasInfo
  L?: TallasInfo
}

interface TallasInfo {
  stock: number
  cantidad: number
}

export type Inputs = {
  name: string
  lastName: string
  email: string
  message: string
  asunto: string
}

export interface StateInterface {
  cart: {
    cart: productInterface[]
  }
  shopList: {
    filteredProducts: productInterface[]
  }
}

export interface CardProductProps {
  product: productInterface
  currentProductIndex?: number
  isMaybe?: boolean
}

export interface ProductInfoModalProps {
  product: productInterface
  closeModal?: () => void
  fullWidth?: boolean
}

export interface ErrorType {
  isError: boolean
  errorMessage: string
}
