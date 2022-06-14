import styled from 'styled-components'

export const SubtotalContainer = styled.div`
  color: #000;
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-size: calc((1 - 1) * 1.2vw + 1rem);
  line-height: 1.5em;
  text-align: right;
  display: inline-flex;
  flex-direction: column;
  min-width: calc(20vw + 134px);

  div {
    font-size: calc((1 - 1) * 1.2vw + 1rem);
    line-height: 1.5em;
    text-align: right;
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;
    margin-top: 27px;
    width: 100%;

    span {
      font-weight: 500;
    }

    & :last-child {
      font-size: calc(1.4rem);
    }
  }

  button {
    margin: 0;
    outline: none;
    width: auto;
    height: auto;
    text-align: center;
    cursor: pointer;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    transition: 0.1s opacity linear;
    -webkit-backface-visibility: hidden;
    color: #fff;
    background-color: #a8a6a1;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: none;
    font-size: 1rem;
    padding: 1.2em 2.004em;
    border-width: 0px;
    border-style: solid;
    line-height: normal;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
