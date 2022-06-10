import styled from 'styled-components'

export const PopUpModalContainer = styled.div`
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
  --sqs-site-gutter: 4vw;
  --sqs-mobile-site-gutter: 6vw;
  --sqs-site-max-width: 1200px;
  color: #3e3e3e;
  font-size: 12px;
  opacity: 1;
  transform: scale(1);
  animation-name: show-confirmation;
  animation-iteration-count: 1;
  animation-duration: 0.3s;
  z-index: 100000001;
  width: 350px;
  position: fixed;
  top: 39px;
  left: 20px;
  font-family: sans-serif;
  overflow-wrap: break-word;
  font-size: 12px;
  text-align: center;
  background: #f6f6f6;
  box-shadow: 0 4px 33px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  padding-top: 22px;

  p {
    padding: 15px 0;
  }
`

export const PopupButton = styled.button`
  width: 100%;
  padding: 9px 0;
  border: none;
  border-top: 1px solid #e6e6e6;
  background: #f6f6f6;
  padding: 10px 0;

  &:hover {
    background: white;
  }
`
