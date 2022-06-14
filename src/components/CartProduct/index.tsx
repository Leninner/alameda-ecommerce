import {
  CartProductContainer,
  ImageProduct,
  ProductInfo,
  QuantityManager,
  PriceBox,
  DeleteButton,
} from './styles'
import { useCartProduct } from '../../hooks/useCartProduct'

export const CartProduct = ({ product, tamaño, cantidad }) => {
  const {
    handleDecrement,
    handleIncrement,
    name,
    images,
    price,
    isDecrementing,
    isIncrementing,
  } = useCartProduct(product, tamaño, cantidad)

  return (
    <CartProductContainer>
      <ImageProduct src={images[0]} alt="some" />

      <ProductInfo>
        <h3>{name}</h3>
        <p>Tamaño: {tamaño}</p>
      </ProductInfo>

      <QuantityManager>
        <button onClick={handleDecrement} disabled={isDecrementing}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={handleIncrement} disabled={isIncrementing}>
          +
        </button>
      </QuantityManager>

      <PriceBox>${price}</PriceBox>

      <DeleteButton>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/delete.png"
          alt="delete"
        />
      </DeleteButton>
    </CartProductContainer>
  )
}
