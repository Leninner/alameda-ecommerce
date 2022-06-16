import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  padding: 0 4vw;

  ${({ isHeader }) =>
    isHeader &&
    `background-color: #f6f6f6; display: flex; justify-content: center;`}
`

export const CheckoutContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10000;
`

export const CheckoutHeader = styled.header`
  padding: 22px 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    max-width: 870px;
    width: 100%;
  }
`

export const CheckoutInfo = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  span {
    margin: 0 5px;
  }
`
