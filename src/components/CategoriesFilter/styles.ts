import styled from 'styled-components'

export const CategoriesFilterContainer = styled.section`
  padding-bottom: 54px;
  padding-top: 54px;
  padding-left: 0;
  margin-bottom: 37px;
  margin-top: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  position: relative;
  justify-content: center;

  &::after {
    content: '';
    opacity: 0.2;
    border-bottom: 1px solid;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`

export const CategoriesList = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0 1.5vw;

    a {
      text-decoration: none;
      color: #525252;
    }
  }

  span {
    opacity: 0.2;
  }
`
