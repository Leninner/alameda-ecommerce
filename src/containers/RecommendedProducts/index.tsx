import { useSelector } from 'react-redux'
import { stateInterface, productInterface } from '../../interfaces'
import { CardProduct } from '../../components/CardProduct'
import { ProductListContainer } from '../ProductList/styles'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useEffect } from 'react'

export const RecommendedProducts = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SEARCH_BY_CATEGORY',
      payload: 'all',
    })
  }, [])

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

  return (
    <div>
      <Title>Quizás también te guste</Title>

      <ProductListContainer>
        {recommendedProducts.slice(0, 5).map((product: productInterface) => (
          <CardProduct product={product} key={product.id} isMaybe />
        ))}
      </ProductListContainer>
    </div>
  )
}
