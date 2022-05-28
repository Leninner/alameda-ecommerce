import { RecommendedProducts } from '../../containers/RecommendedProducts'
import { ProductInformation } from '../../containers/ProductInformation'
import { useParams } from 'react-router-dom'

export const ProductInfoPage = () => {
  const { id } = useParams()

  return (
    <div>
      <ProductInformation id={id} />
      <RecommendedProducts id={id} />
    </div>
  )
}
