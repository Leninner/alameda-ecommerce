import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContactIntro = styled.div`
  width: 100%;
  max-width: 583px;

  h3 {
    line-height: 1.3328;
    font-size: calc(2.2 * 1rem);
    font-weight: 400;
    margin: 2rem 0;
  }

  p {
    margin: 1rem 0;
    font-weight: 300;
    font-size: calc(1 * 1rem);
  }
`
