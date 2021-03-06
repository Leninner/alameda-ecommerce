import styled from 'styled-components'

export const CartProductContainer = styled.div`
  font-size: calc(1 * 1rem);
  line-height: 1.5em;
  display: flex;
  justify-content: flex-start;
  min-height: 70px;
  padding: 15px;
  width: inherit;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 39%, 0.2);
  flex-wrap: wrap;
  position: relative;
`

export const ImageProduct = styled.img`
  line-height: 1.5em;
  margin-right: 22px;
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  vertical-align: middle;
  width: 132px;
  height: 132px;

  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`

export const ProductInfo = styled.div`
  display: inline-block;
  flex-grow: 1;
  margin-bottom: 22px;
  margin-right: 55px;
  min-width: 90px;

  h3 {
    font-weight: 500;
  }

  p {
    color: #b5b3b3;
  }

  @media (max-width: 768px) {
    flex-basis: 20%;
    font-size: 3.2vw;
    margin-right: 11px;
  }
`

const controladores = `
  font-weight: 400;
  font-size: calc(1.5 * 1rem);
  cursor: pointer;
  padding: 10px;
  border-radius: 10000px;

  &:hover {
    background-color: #f1f1f1;
  }
`

export const QuantityManager = styled.div`
  min-width: 90px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  white-space: nowrap;
  cursor: default;
  font-size: calc(1.3 * 1rem);

  button {
    ${controladores}
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0 10px;

    &:disabled {
      opacity: 0.5;

      &:hover {
        background-color: transparent;
      }
    }
  }
`

export const PriceBox = styled.div`
  min-width: 20vw;
  text-align: right;
  vertical-align: middle;
  white-space: nowrap;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  margin: 0px;
  box-sizing: border-box;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
`

export const DeleteButton = styled.div`
  display: inline-block;
  margin-left: 22px;
  vertical-align: middle;
  position: relative;

  img {
    ${controladores}
    position: relative;
    top: -10px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 0;
  }
`
