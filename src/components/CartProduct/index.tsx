import {
  CartProductContainer,
  ImageProduct,
  ProductInfo,
  QuantityManager,
  PriceBox,
  DeleteButton,
} from './styles'

export const CartProduct = () => {
  return (
    <CartProductContainer>
      <ImageProduct
        src="https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692796105-B64MYGGU1BDBM8CP437H/ulihu-blue-linen-tunic_0308-v1-FINAL-copy.jpg"
        alt="some"
      />

      <ProductInfo>
        <h3>Túnica Loudge / Azul</h3>
        <p>Tamaño: 0</p>
      </ProductInfo>

      <QuantityManager>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </QuantityManager>

      <PriceBox>$50.00</PriceBox>

      <DeleteButton>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/delete.png"
          alt="delete"
        />
      </DeleteButton>
    </CartProductContainer>
  )
}
