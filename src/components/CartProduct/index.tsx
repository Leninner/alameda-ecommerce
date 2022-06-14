import {
  CartProductContainer,
  ImageProduct,
  ProductInfo,
  QuantityManager,
  PriceBox,
  DeleteButton,
} from './styles'

const handleIncrement = () => {
  console.log('Increment')
}

const handleDecrement = () => {
  console.log('Decrement')
}

export const CartProduct = ({ product, tamaño, cantidad }) => {
  const { name, price, images } = product

  return (
    <CartProductContainer>
      <ImageProduct src={images[0]} alt="some" />

      <ProductInfo>
        <h3>{name}</h3>
        <p>Tamaño: {tamaño}</p>
      </ProductInfo>

      <QuantityManager>
        <button onClick={handleDecrement} disabled={true}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={handleIncrement} disabled={false}>
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
