import { CategoriesFilterContainer, CategoriesList } from './styles'

export const CategoriesFilter = () => {
  return (
    <CategoriesFilterContainer>
      <CategoriesList>
        <li>
          <a href="#">Oferta</a>
        </li>

        <span>|</span>

        <li>
          <a href="#">Pantalones</a>
        </li>

        <span>|</span>

        <li>
          <a href="#">Prendas superiores</a>
        </li>
      </CategoriesList>
    </CategoriesFilterContainer>
  )
}
