import styled from 'styled-components'

export const Formulario = styled.form`
  padding-left: 2vw;
`

export const MainDescription = styled.div`
  display: block;
  width: 380px;
  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  h1 {
    font-size: calc(2.2 * 1rem);
    font-weight: normal;
  }

  span {
    font-weight: 400;
    font-size: calc(1.2 * 1rem);
  }

  h4 {
    margin: 2rem 0;
    font-weight: normal;
  }

  ul {
    padding: 0 0 0 3rem;
  }
`

export const Campos = styled.div`
  width: 100%;

  label {
    margin: 2rem 0;

    span {
      display: block;
    }

    display: block;
  }

  select {
    ${({ fullWidth }) => (fullWidth ? `width: 100%;` : `width: 320px;`)}
    height: 69px;
    padding: 0 20px;
    border: 1px solid grey;
    outline: none;

    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }

  input {
    width: 150px;
    height: 69px;
    padding: 0 20px;
    border: 1px solid grey;
    outline: none;
  }

  button {
    ${({ fullWidth }) => (fullWidth ? `width: 100%;` : `width: auto;`)}

    height: auto;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    line-height: 1em;
    letter-spacing: 0.05em;
    font-weight: 500;
    font-style: normal;
    text-transform: none;
    line-height: 1.2em;
    letter-spacing: 0.02em;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: normal;
    padding: 1.2em 2.004em;
    background-color: #a6a6a6;
    color: white;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #8c8c8c;
    }
  }

  a {
    margin: 2rem 0;
    color: grey;
    display: block;
  }
`
