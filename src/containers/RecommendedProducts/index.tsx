import { useSelector } from 'react-redux'
import { stateInterface, productInterface } from '../../interfaces'
import { CardProduct } from '../../components/CardProduct'
import { ProductListContainer } from '../ProductList/styles'
import styled from 'styled-components'

export const RecommendedProducts = ({ id }) => {
  const productsList = useSelector(
    ({ shopList: { filteredProducts } }: stateInterface) => filteredProducts
  )

  const recommendedProducts = productsList.filter(
    (product: productInterface) => product.id !== Number(id)
  )

  const Title = styled.h1`
    font-size: 2.6rem;
    font-weight: normal;
  `

  // Función que recolenta 5 productos al azar desde un arreglo
  // const getRandomProducts = (products: productInterface[]) => {
  //   const randomProducts: any = []

  //   for (let i = 0; i < 5; i++) {
  //     const randomIndex = Math.floor(Math.random() * products.length)
  //     randomProducts.push(products[randomIndex])
  //   }

  //   return randomProducts
  // }

  return (
    <div>
      <Title>Quizás también te guste</Title>

      <ProductListContainer>
        {recommendedProducts.slice(0, 5).map((product: productInterface) => (
          <CardProduct {...product} isMaybe key={product.id} />
        ))}
      </ProductListContainer>
    </div>
  )
}
