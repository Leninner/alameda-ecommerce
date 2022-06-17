import { ImageDescription } from '../../components/ImageDescription'
import { ProductDescription } from '../../components/ProductDescription'
import { useSelector } from 'react-redux'
import { StateInterface } from '../../interfaces'
import { ModalBody } from '../ProductInfoModal/styles'

export const ProductInformation = ({ id }) => {
  const {
    shopList: { filteredProducts },
  } = useSelector((state: StateInterface) => state)

  const currentProduct = filteredProducts.find(product => product.id === Number(id))

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
          product={
            currentProduct || {
              id: 0,
              name: '',
              price: 0,
              description: '',
              details: [],
              images: [],
              tallas: {},
              isInOffer: false,
              offerPrice: 0,
              category: '',
            }
          }
          fullWidth
        />
      </ModalBody>
    </div>
  )
}
