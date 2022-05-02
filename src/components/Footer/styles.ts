import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding-top: 3.3vmax;
  padding-bottom: 3.3vmax;
  font-size: calc(1 * 1rem);
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.8;
  height: 408px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin: 1.5rem 0;
    padding: 0;
  }

  div {
    display: flex;
    padding-bottom: 17px;

    svg {
      margin: 0 5px;
    }
  }

  p {
    padding-top: 17px;
    padding-bottom: 17px;

    a {
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      text-decoration: none;
      color: #000;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding-top: 4vmax;
    padding-bottom: 4vmax;

    span {
      margin: 0 1.5rem;
    }
  }
`

export const SubcribeForm = styled.form`
  padding-top: 17px;
  padding-bottom: 17px;
  display: flex;
  width: 35%;

  input {
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size: calc(1 * 1rem);
    padding: 1.4rem 2rem;
    line-height: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
    outline: none;
    margin: 0 10px 0 0;
    width: 100%;

    &::placeholder {
      color: rgba(0, 0, 0, 0.29);
    }

    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

  button {
    font-size: calc(1 * 1rem);
    background: #a8a6a1;
    border: 1px solid #a8a6a1;
    padding: 1.4rem 2rem;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;

    input {
      margin: 0 0 10px 0;
    }
  }
`
