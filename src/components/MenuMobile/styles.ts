import styled from 'styled-components'

export const MenuMobileContainer = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  svg {
    position: absolute;
    top: 4vw;
    left: 4vw;
    color: #525252;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    background: white;
    height: 100%;
    width: 100%;

    a {
      margin: 3vw 5vw;
      font-weight: 300;
      font-style: normal;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 1.8em;
      font-size: 1rem;
      line-height: 1;
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: #525252;

      span {
        width: 100%;
        font-size: 6.6vmin;
      }
    }
  }

  section {
    position: absolute;
    bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 120;

    a {
      margin: 0 15px;
      width: auto;
      font-weight: 300;
      height: auto;

      svg {
        position: relative;
        color: #525252;
        top: 0;
        left: 0;
      }
    }
  }
`
