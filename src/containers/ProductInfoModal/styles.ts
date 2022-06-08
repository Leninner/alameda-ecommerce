import styled from 'styled-components'

export const ProductInfoModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
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
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
