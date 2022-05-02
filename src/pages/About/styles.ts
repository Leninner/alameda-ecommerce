import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;

  section {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    section {
      width: 95%;

      img {
        width: 100%;
        height: auto;
      }

      h2 {
        font-size: calc(1.2 * 1rem);
        margin: 2rem 0;
      }
    }
  }
`

export const FirstPart = styled.section`
  img {
    width: 583px;
    height: 437px;
  }

  h2 {
    font-size: 2vmax;
    font-weight: normal;
  }
`

export const Description = styled.section`
  p {
    white-space: pre-wrap;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0em;
    font-size: calc(1 * 1.1em);
    font-weight: 300;
  }
`
