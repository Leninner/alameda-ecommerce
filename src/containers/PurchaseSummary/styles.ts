import styled from 'styled-components'

export const PurchaseSummaryContainer = styled.section`
  position: sticky;
  top: 176px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 22px 0 22px;
  background-color: #fff;
  border: 1px solid #e6e6e6;

  h2 {
    -webkit-text-size-adjust: 100%;
    font-family: Clarkson, Helvetica, sans-serif;
    line-height: 22px;
    color: black;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 11px;
  }

  footer {
    margin-top: 16px;
    padding: 15px 0;
    border-top: 1px solid #e6e6e6;
    display: flex;
    align-items: center;

    img {
      margin-right: 16px;
    }

    span {
      line-height: 22px;
      font-weight: 300;
      color: black;
      font-size: 11.2px;
      letter-spacing: 0.75px;
      text-transform: uppercase;
    }
  }
`
