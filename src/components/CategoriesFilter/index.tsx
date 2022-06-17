import { CategoriesFilterContainer, CategoriesList } from './styles'
import { useDispatch } from 'react-redux'

export const CategoriesFilter = () => {
  const dispatch = useDispatch()

  const searchByCategory = (category: string) => {
    return dispatch({
      type: 'SEARCH_BY_CATEGORY',
      payload: category,
    })
  }

  return (
    <CategoriesFilterContainer>
      <CategoriesList>
        <li onClick={() => searchByCategory('all')}>Todo</li>

        <span>|</span>

        <li onClick={() => searchByCategory('offer')}>Oferta</li>

        <span>|</span>

        <li onClick={() => searchByCategory('pants')}>Pantalones</li>

        <span>|</span>

        <li onClick={() => searchByCategory('topCloths')}>Prendas superiores</li>
      </CategoriesList>
    </CategoriesFilterContainer>
  )
}
