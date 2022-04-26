import styled from 'styled-components'

export const LookBookContainer = styled.div`
  max-width: calc(960px);
  margin: 0 auto;

  .slider {
    width: 100%;
    text-align: center;

    .slick-list {
      padding: 0;
    }

    img {
      max-width: 312.16px;
      max-height: 469px;
      object-fit: cover;

      width: 100%;
      height: 100%;
    }

    .slick-prev:before,
    .slick-next:before {
      color: rgb(58, 57, 57) !important;
    }
  }
`
