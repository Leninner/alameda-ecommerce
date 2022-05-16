import styled from 'styled-components'

export const ImageDescriptionContainer = styled.div`
  max-width: 600px;
  width: 100%;
  heght: 522px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  #mainImage {
    width: 422px;
    background-color: black;
    height: 522px;
  }
`

export const PreviewImages = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 67px;
    height: 67px;
    background-color: red;
    margin-bottom: 10px;
  }
`
