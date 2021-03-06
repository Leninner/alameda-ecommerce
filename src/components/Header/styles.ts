import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw;
  line-height: 1;
  font-size: 16px;
  position: relative;

  h1 {
    flex: 1;
    text-align: center;
    font-size: calc(2 * 1rem);
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1.4em;

    a {
      color: #000;
      text-decoration: none;
    }
  }
`

export const NavigationOptions = styled.nav`
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 20px;

      a {
        font-size: calc(1 * 1rem);
        text-decoration: none;
        color: #525252;
        font-weight: 300;
        letter-spacing: 0.5px;
        backface-visibility: hidden;
      }
    }
  }

  .active {
    padding-bottom: 2px;
    border-bottom: 1px solid #525252;
  }
`

export const SocialOptions = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: black;
  }
`

export const SocialButtons = styled.div`
  width: 83px;
  display: flex;
  justify-content: flex-end;

  a {
    flex: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ShopCart = styled.div`
  width: 53px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;

  svg {
    path {
      fill: #525252;
    }
  }

  span {
    position: absolute;
    top: -10px;
    right: -10px;
  }
`

export const Box = styled.div`
  flex: 1;
  text-align: left;

  svg {
    cursor: pointer;
  }
`
