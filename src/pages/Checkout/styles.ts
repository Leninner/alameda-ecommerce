import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  max-width: 870px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  section {
    width: 418px;
  }

  form {
    width: 418px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    section {
      width: 100%;
    }

    form {
      width: 100%;
    }
  }
`

const commonStyles = `padding: 22px;
background-color: #fff;
border: 1px solid #e6e6e6;
margin-bottom: 22px;
position: relative;`

export const Container = styled.div`
  ${commonStyles}

  h2 {
    -webkit-text-size-adjust: 100%;
    font-family: Clarkson, Helvetica, sans-serif;
    line-height: 22px;
    color: black;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 11px;
  }

  @media (max-width: 768px) {
    border: none;
    border-bottom: 1px solid #e6e6e6;
  }
`

export const InputComponent = styled.input`
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  font: inherit;
  margin: 0;
  outline: none;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  color: #313131;
  font-size: 14px;
  height: 44px;
  line-height: 22px;
  padding: 11px;
  position: relative;
  width: 100%;
  appearance: none;
  margin-bottom: 11px;

  ${({ error }) => error && `border: 1px solid #ff0000;`}

  &:disabled {
    border: 1px solid transparent;
    margin-bottom: -20px;
  }
`

export const ButtonComponent = styled.button`
  -webkit-text-size-adjust: 100%;
  font: inherit;
  margin: 0;
  outline: none;
  overflow: visible;
  appearance: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 22px;
  padding: 11px;
  text-align: center;
  text-transform: capitalize;
  transition: background-color 0.1s ease-in-out;
  user-select: none;
  width: 100%;
  border-radius: 3px;
  display: block;
  margin-top: 22px;
  background: #313131;
`
