import styled from 'styled-components'

export const ProductInfoModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`

export const CloseButton = styled.span`
  position: fixed;
  top: 0px;
  right: 25px;
  font-size: 25px;
  cursor: pointer;
`

export const PreviousButton = styled.span`
  position: fixed;
  top: 50%;
  left: 10px;
  font-size: 25px;
  cursor: pointer;
`

export const NextButton = styled.span`
  position: fixed;
  top: 50%;
  right: 25px;
  font-size: 25px;
  cursor: pointer;
`

export const ModalBody = styled.div`
  width: 70%;
  display: flex;
  margin-top: 20vh;
  min-height: 100vh;
`
