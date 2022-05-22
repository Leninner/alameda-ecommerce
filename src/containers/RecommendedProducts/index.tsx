import { useSelector } from 'react-redux'
import { stateInterface, productInterface } from '../../interfaces'
import { useParams } from 'react-router-dom'
import { CardProduct } from '../../components/CardProduct'

export const RecommendedProducts = () => {
  const productsList = useSelector(
    ({ shopList: { filteredProducts } }: stateInterface) => filteredProducts
  )
  const { id } = useParams()

  const recommendedProducts = productsList.filter(
    (product: productInterface) => product.id !== Number(id)
  )

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
      <h1>Quizá también te guste</h1>

      <ul>
        {recommendedProducts.slice(0, 5).map((product: productInterface) => (
          <CardProduct {...product} isMaybe key={product.id} />
        ))}
      </ul>
    </div>
  )
}
