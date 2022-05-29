import { ImageDescription } from '../../components/ImageDescription'
import { ProductDescription } from '../../components/ProductDescription'
import { useSelector } from 'react-redux'
import { stateInterface } from '../../interfaces'
import { ModalBody } from '../ProductInfoModal/styles'

export const ProductInformation = ({ id }) => {
  const {
    shopList: { filteredProducts },
  } = useSelector((state: stateInterface) => state)

  const currentProduct = filteredProducts.find(
    product => product.id === Number(id)
  )

  return (
    <div>
      <span
        style={{
          cursor: 'pointer',
        }}
      >
        Tienda {'>'} Túnica Lounge / Azul
      </span>

      <ModalBody withoutMarginTop>
        <ImageDescription
          imageOne={currentProduct?.images[0]}
          imageTwo={currentProduct?.images[1]}
        />

        <ProductDescription
          id={currentProduct?.id}
          name={currentProduct?.name}
          price={currentProduct?.price}
          fullWidth
        />
      </ModalBody>
    </div>
  )
}
