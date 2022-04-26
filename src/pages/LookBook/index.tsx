import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LookBookContainer } from './styles'

export const LookBook = () => {
  const LookBookImages = [
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692810434-WZXVBUW0FHEM92M454PQ/lauren-winter-20150715-IMG_9299-v1-FINAL.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692808323-Q1DVYI2MDAKQNRPQK25M/lauren-winter-20150715-IMG_7316-v1-FINAL.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692809155-C2W5PQA3WDOR3CS9IUEB/lauren-winter-20150715-IMG_0636-v1-FINAL.jpg',
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  }

  return (
    <LookBookContainer>
      <Slider {...settings} className="slider">
        {LookBookImages.map(image => (
          <img src={image} alt="LookBook" />
        ))}
      </Slider>
    </LookBookContainer>
  )
}
