import styled from 'styled-components'

export const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2vw;
  grid-row-gap: 4vw;
  padding: 0;
  place-items: center;
  max-width: 1456px;
  width: 100%;
  margin: 0 auto;
`
