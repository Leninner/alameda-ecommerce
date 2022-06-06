import styled from 'styled-components'

export const Section = styled.section`
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
  color: #000;
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-size: calc((1 - 1) * 1.2vw + 1rem);
  line-height: 1.5em;
  position: relative;
`

export const DefaultCartTitle = styled.h1`
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  color: #000;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  box-sizing: border-box;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  padding: 15px;
`

export const DefaultCartSubtitle = styled.p`
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  margin: 0px;
  box-sizing: border-box;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  padding: 15px;
`

export const DefaultButton = styled.button`
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: auto;
  height: auto;
  text-align: center;
  cursor: pointer;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: #a8a6a1;
  border-color: #fff;
  transition: 0.1s opacity linear;
  -webkit-backface-visibility: hidden;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  font-size: 1.1rem;
  padding: 1.2em 2.004em;
  border-width: 0px;
  border-style: solid;
  line-height: normal;
  border-radius: 0;
  margin: 15px;

  &:hover {
    opacity: 0.8;
  }
`
