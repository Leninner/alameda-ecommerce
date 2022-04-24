import styled from 'styled-components'

export const CardProductContainer = styled.section`
  height: 480px;
  width: 290px;
  display: flex;
  flex-direction: column;
`

export const CardProductImgContainer = styled.div`
  height: 386px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.8em;
    width: 137px;
    height: 56px;
    color: #fff;
    background-color: #000;
    border-width: 0;
    line-height: 1em;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`

export const CardProductInfo = styled.div`
  height: 59px;
  width: 100%;
  margin-top: 1.5vw;

  h3 {
    font-size: calc(1.3 * 1rem);
    font-weight: 500;
    font-style: normal;
    line-height: 1.4em;
  }

  span {
    font-size: calc(0.9 * 1rem);
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.01em;
  }
`
