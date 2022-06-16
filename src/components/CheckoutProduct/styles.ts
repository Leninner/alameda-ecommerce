import styled from 'styled-components'

export const CheckoutProductContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 11px;
  display: flex;
  justify-content: space-between;

  img {
    border: 1px solid #e6e6e6;
    width: 88px;
    height: 88px;
  }
`

export const ProductData = styled.div`
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  span {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`

export const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: #000f;
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
  }
`

export const CantidadContainer = styled.div`
  position: relative;
  width: 75px;
  padding: 0 9px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin: 5px 0;

  &:focus-within {
    box-shadow: 0 0 1px 2px #0066ff;
  }

  label {
    position: absolute;
    display: block;
    color: #767676;
    font-size: 12px;
    line-height: 16px;
    top: 4px;
  }

  input {
    text-align: right;
    width: 100%;
    border: none;
    outline: none;
    color: #313131;
    font-size: 14px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
