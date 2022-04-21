import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-height: 155px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw;
  line-height: 1;
  font-size: 16px;

  h1 {
    flex: 1;
    text-align: center;
    font-size: calc(2 * 1rem);
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1.4em;
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
`

export const SocialOptions = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    margin-left: 20px;
  }
`
